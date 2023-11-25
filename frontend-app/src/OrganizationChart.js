import './OrganizationChart.css';

function OrganizationChart({ node: employee, onToggleCollapse }){
    const toggleCollapse = (e) => {
        onToggleCollapse(employee.node);
    }
    if (employee && employee.node){
        if (employee.node.displayItself){
            return (
                <div className="Node" onClick={toggleCollapse}>
                    <div className="Node-name">{employee.node.name}</div>
                    {employee.node.department && <div>Department: {employee.node.department}</div>}
                    <br></br>
                    <div>Location: {employee.node.office}</div>
                </div>
            );
        } // else: return "nothing" AKA the "collapsed" node
        return
    }
    return (<div className="Node">Loading...</div>);
}

export default OrganizationChart;

