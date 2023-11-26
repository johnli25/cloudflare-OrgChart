import './EmployeeNode.css';

function EmployeeNode({ node: employee, onToggleCollapse }){
    const toggleCollapse = (e) => {
        onToggleCollapse(employee.node);
    }

    if (employee && employee.node){
        if (employee.node.displayItself){
            return (
                <div>
                    <div className="Node" onClick={toggleCollapse}>
                        <div className="Node-name">{employee.node.name}</div>
                        {employee.node.department && <div>Department: {employee.node.department}</div>}
                        <br></br>
                        <div>Location: {employee.node.office}</div>
                    </div>
                </div>
            );
        } // else: return "nothing" AKA the "collapsed" node
        return null;
    }
    return (<div className="Node">Loading...</div>);
}

export default EmployeeNode;

