// import React, { useEffect, useState } from 'react';
import './OrganizationChart.css';
// import {OrgChart} from 'react-orgchart'; 
// import 'react-orgchart/index.css';

function OrganizationChart({ employee }){
    if (employee){
        return (
            <div className="Node" onClick={() => alert("(Click me) Hi my name is: " + "placeholder")}>{ "Click on me for more info! " }</div>
        );
    }
    return (<div className="Node">Loading...</div>)
}

export default OrganizationChart;

