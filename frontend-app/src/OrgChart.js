import React, { useEffect, useState } from 'react';
import OrgChart from 'react-org-chart'; // Replace with your actual import

function createOrgChartData(data) {
    return data.organization.departments.map(department => {
        const manager = department.employees.find(emp => emp.isManager);
        const employees = department.employees.filter(emp => !emp.isManager);

        return {
            name: department.name,
            manager: manager ? { name: manager.name, title: manager.skills.join(', ') } : null,
            children: employees.map(emp => ({
                name: emp.name,
                title: emp.skills.join(', '),
                office: emp.office
                // Add more employee details as needed
            }))
        };
    });
}

function OrganizationChart() {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('YOUR_BACKEND_URL/organization-chart');
                const data = await response.json();
                const transformedData = createOrgChartData(data);
                setChartData(transformedData);
            } catch (error) {
                console.error('Error fetching organization data:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <h1>Organization Chart</h1>
            {chartData.map((department, index) => (
                <OrgChart key={index} tree={department} />
            ))}
        </div>
    );
}

export default OrganizationChart;

