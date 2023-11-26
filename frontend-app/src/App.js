import './App.css';
import React, { useEffect, useState } from 'react';
import EmployeeNode from './EmployeeNode';
import OrgChart from 'react-orgchart'; 
import 'react-orgchart/index.css';

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
            displayItself: true,
            displayChildren: true,
            children: []
        };
        dept.employees.forEach(employee => {
            if (!employee.isManager) {
                managerNode.children.push
                ({ name: employee.name,
                   department: dept.name,
                   office: employee.office,
                   displayItself: true,
                   skills: employee.skills});
            }
        });
        transformedData.push(managerNode);
    });

    return {'name': 'CEO', 'office': 'HQ', 'displayItself': true, 'displayChildren': true, 'children': transformedData};
}

function App() {
    const [orgChartData, setOrgChartData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://cloudflare-org-dashboard-project-worker.john-li25.workers.dev/organization-chart');
                if (!response.ok) {
                    console.log("Unable to get successful response", response)
                    throw new Error(`${response.status} ${response.statusText}`);
                }
                const data = await response.json();
                const transformedData = transformDataToOrgChart(data);
                setOrgChartData(transformedData);
            } catch (error) {
                console.log("Error fetching data: ", error);
            }
        }

        fetchData();
    }, []);

    const handleToggleCollapse = (employeeNode) => {
        var targetDisplayState = true; // initialize targetDisplayState
        if (employeeNode.displayChildren != null){
            targetDisplayState = !employeeNode.displayChildren;
            employeeNode.displayChildren = targetDisplayState;
        }

        const toggleDisplayForChildren = (node, targetDisplayState) => {
            if (node.children && node.children.length > 0) {
                node.children = node.children.map(child => { //loop through all the children and flip its display state
                    // Toggle display state for the child
                    child.displayItself = targetDisplayState;
                    if (targetDisplayState === false) {
                        child.displayChildren = targetDisplayState;
                        toggleDisplayForChildren(child, targetDisplayState); // recurse into node's children
                    }
                    return child;
                });
            }
        };
    
        setOrgChartData(prevData => {
            // Create a deep clone of the previous data
            let newData = JSON.parse(JSON.stringify(prevData));

            // Function to recursively search and toggle children's display
            const findEmployeeToToggle = (node, targetDisplayState) => {
                if (node.children && node.children.length > 0){
                    node.children.forEach(child => {
                        if (child.name === employeeNode.name) { // base case
                            // Found the node, call helper function to toggle display for children
                            toggleDisplayForChildren(child, targetDisplayState);
                            return; // stop recusing because we found the node and completed toggling display for its children
                        } else {
                            // Continue recursing into children
                            findEmployeeToToggle(child, targetDisplayState);
                        }
                    });
                };
            };

            // Special handling for the root/CEO node
            if (employeeNode.name === 'CEO') {
                toggleDisplayForChildren(newData, targetDisplayState);
            } else {
                // Start the recursive process for nodes below the root/CEO node
                findEmployeeToToggle(newData, targetDisplayState);
            }
    
            return newData; // Return the modified new data
        });
    }
        
    return (
        <div className="App" id="orgChart">
            <header className="App-header">
                <h1><b>Organization Chart</b></h1>
                <h5><i>Click on an employee/box to collapse or uncollapse employees!</i></h5>
            </header>
            <OrgChart tree={orgChartData}
            NodeComponent={node => (
                <EmployeeNode
                    node={node}
                    onToggleCollapse={handleToggleCollapse}
                />
            )}/>
        </div>
    );
}

export default App ;
