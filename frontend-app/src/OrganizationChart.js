import React, { useEffect, useState } from 'react';
import OrgChart from 'react-orgchart'; 
import './OrganizationChart.css';
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

    return transformedData;
}

function OrganizationChart(){
    const [orgChartData, setOrgChartData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://cloudflare-org-dashboard-project-worker.john-li25.workers.dev/organization-chart');
                // const response = await fetch('http://127.0.0.1:8787/organization-chart', {mode: 'cors'})
                console.log("org chart from backend", response)
                const data = await response.json();
                const transformedData = transformDataToOrgChart(data);
                setOrgChartData(transformedData);
            } catch (error) {
                console.log("Error fetching data: ", error);
            }
        }

        fetchData();
    }, []);

    console.log(orgChartData)
    return (
        <div>
            {orgChartData.map((dept, index) => {
                return (
                    <div key={index}>
                        <h2>{dept.name}</h2>
                        <OrgChart tree={dept} />
                    </div>
                );
            })}
        </div>
    );
}

export default OrganizationChart;

