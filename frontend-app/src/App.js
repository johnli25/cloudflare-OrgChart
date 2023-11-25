import './App.css';
import React, { useEffect, useState } from 'react';
import OrganizationChart from './OrganizationChart';
import OrgChart from 'react-orgchart'; 
import 'react-orgchart/index.css';

function toggleNodeCollapse(nodeName) {


}

function transformDataToOrgChart(jsonData) {
    let transformedData = [];

    jsonData.organization.departments.forEach(dept => {
        let manager = dept.managerName;
        let managerOffice = "";
        dept.employees.forEach(employee => { //find the office location of the manager
            if (employee.isManager) {
                managerOffice = employee.office;
            }
        });
        let managerNode = {
            name: manager,
            department: dept.name,
            office: managerOffice,
            isCollapsed: false,
            children: []
        };
        dept.employees.forEach(employee => {
            if (!employee.isManager) {
                managerNode.children.push
                ({ name: employee.name,
                   department: dept.name,
                   office: employee.office,
                   skills: employee.skills});
            }
        });
        transformedData.push(managerNode);
    });

    return {'name': 'CEO', 'office': 'HQ', 'isCollapsed': false, 'children': transformedData};
}

function App() {
    const [orgChartData, setOrgChartData] = useState([]);
    const [isCollapsed, setIsCollapsed] = useState(false);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://cloudflare-org-dashboard-project-worker.john-li25.workers.dev/organization-chart');
                // const response = await fetch('http://127.0.0.1:8787/organization-chart', {mode: 'cors'})
                if (!response.ok) {
                    console.log("Unable to get successful response", response)
                    throw new Error(`${response.status} ${response.statusText}`);
                }
                const data = await response.json();
                const transformedData = transformDataToOrgChart(data, isCollapsed);
                setOrgChartData(transformedData);
            } catch (error) {
                console.log("Error fetching data: ", error);
            }
        }

        fetchData();
    }, []);

    const handleToggleCollapse = (employeeNodeName) => {
        console.log("handleToggleCollapse called: ", employeeNodeName);
        if (employeeNodeName === 'CEO') {
            orgChartData.isCollapsed = !orgChartData.isCollapsed;
            setOrgChartData(orgChartData);
            return;
        }
        orgChartData.children.forEach(manager => {
            if (manager.name === employeeNodeName) {
                manager.isCollapsed = !manager.isCollapsed;
            }
        });
        setOrgChartData(orgChartData);
    }
    console.log("orgChartData after handleToggleCollapse: ", orgChartData); 
    
    return (
        <div className="App" id="orgChart">
            <header className="App-header">
                <h1><b>Organization Chart</b></h1>
                <h5><i>Click on a box to view more info about employee!</i></h5>
            </header>
            <OrgChart tree={orgChartData}             
            NodeComponent={node => (
                <OrganizationChart
                    node={node}
                    onToggleCollapse={handleToggleCollapse}
                />
            )}/>
        </div>
    );
}

export default App ;
