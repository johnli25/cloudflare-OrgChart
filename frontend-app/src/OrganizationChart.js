import './OrganizationChart.css';
import { useState } from 'react';

function OrganizationChart({ node: employee, onToggleCollapse }){
    console.log("employee", employee);
    const toggleCollapse = () => {
        onToggleCollapse(employee.node.name);
    }

    if (employee){
        return (
            <div className="Node" onClick={toggleCollapse}>
                <div className="Node-name">{employee.node.name}</div>
                {employee.node.department && <div>Department: {employee.node.department}</div>}
                <br></br>
                <div>Location: {employee.node.office}</div>
            </div>
        );
    }
    return (<div className="Node">Loading...</div>)
}

export default OrganizationChart;

