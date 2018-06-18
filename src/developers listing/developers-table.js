import React, {Component} from 'react';


class DevelopersTable extends Component {
    renderTableRows(developers) {
        return developers.map(
            (developer, index) =>
                <tr key={index}>
                    <td>{developer.name}</td>
                    <td>{developer.email}</td>
                    <td>{developer.userRole}</td>
                    <td>
                        <button type="button" style={{color: 'darkslategrey'}} className="btn btn-link" data-toggle="modal"
                                data-target="#exampleModal" onClick={() => {this.openModal(index);}}>
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                        </button>
                    </td>
                </tr>
        )
    }

    renderTable(developers) {
        return (

            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">User role</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {this.renderTableRows(developers)}
                </tbody>
            </table>
        )
    }

    render() {
        const {developers} = this.props;
        return (
            <div>
                {this.renderTable(developers)}
            </div>
        )
        console.log(developers);
    }
}

export default DevelopersTable;