import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EmployeeView extends Component {
    render() {
        console.log(this.props);
        const {employee} = this.props;

        return(
            <ul className="list-group">
                <li className="list-group-item">{employee.firstName} {employee.lastName}</li>
                <li className="list-group-item">{employee.role}</li>
            </ul>
        )
    }


}

// Mark message input parameter as required
EmployeeView.propTypes = {
    employee: PropTypes.object.isRequired
}
export default EmployeeView;