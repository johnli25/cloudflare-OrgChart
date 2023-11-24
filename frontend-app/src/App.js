import './App.css';
import React, { useEffect, useState } from 'react';
import OrganizationChart from './OrganizationChart';
import OrgChart from 'react-orgchart'; 
import 'react-orgchart/index.css';

function transformDataToOrgChart(jsonData) {
    let transformedData = [];

    jsonData.organization.departments.forEach(dept => {
        let manager = dept.managerName;
        let managerNode = {
            name: manager,
            children: []
        };

        dept.employees.forEach(employee => {
            if (!employee.isManager) {
                managerNode.children.push
                ({ name: employee.name });
            }
        });
        transformedData.push(managerNode);
    });

    return {'Name': 'Home of company org', 'children': transformedData};
}

function App() {
    const [orgChartData, setOrgChartData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://cloudflare-org-dashboard-project-worker.john-li25.workers.dev/organization-chart');
                // const response = await fetch('http://127.0.0.1:8787/organization-chart', {mode: 'cors'})
                if (!response.ok) {
                    console.log("Unable to get successful response", response)
                    throw new Error(`${response.status} ${response.statusText}`);
                }
                console.log("response", response)
                const data = await response.json();
                const transformedData = transformDataToOrgChart(data);
                setOrgChartData(transformedData);
            } catch (error) {
                console.log("Error fetching data: ", error);
            }
        }

        fetchData();
    }, []);

    console.log("Org chart data JSON", orgChartData)

    return (
        <div className="App" id="orgChart">
            <header className="App-header">
                <h1><b>Organization Chart</b></h1>
                <h5><i>Click on a box to view more info about employee!</i></h5>
            </header>
            <OrgChart tree={orgChartData} NodeComponent={OrganizationChart} />
        </div>
    );
}

export default App ;
