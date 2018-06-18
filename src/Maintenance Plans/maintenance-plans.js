import React, {Component} from 'react';

class MaintenancePlans extends Component {
    renderTableRows(maintenancePlans) {
        return maintenancePlans.map(
            (maintenancePlan, index) =>
                <tr key={index}>
                    <td>{maintenancePlan.type}</td>
                    <td>{maintenancePlan.status}</td>
                    <td>{maintenancePlan.quoteNumber}</td>
                    <td>{maintenancePlan.serialNumber}</td>
                    <td>{maintenancePlan.customer}</td>
                    <td>{maintenancePlan.createdOn}</td>
                    <td>
                        <button type="button" style={{color: 'darkslategrey'}}>
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                        </button>
                        <button type="button" style={{color: 'darkslategrey'}}>
                            <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                    </td>
                </tr>
        )
    }

    renderTable(maintenancePlans) {
        return (
            <table className="table table-hover table-with-actions mt-3">
                <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Status</th>
                    <th scope="col">Quote Number</th>
                    <th scope="col">Serial Number</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Created on</th>
                </tr>
                </thead>
                <tbody>
                {this.renderTableRows(maintenancePlans)}
                </tbody>
            </table>
        )
    }

    render() {
        const {maintenancePlans} = this.props;
        return (
            <div>
                {this.renderTable(maintenancePlans)}
            </div>
        )
        console.log(maintenancePlans);
    }

}

export default MaintenancePlans;