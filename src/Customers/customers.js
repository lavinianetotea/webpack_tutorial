import React, {Component} from 'react';

class Customers extends Component {
    constructor() {
        super();

        this.state = {
            customerProducts: [],
            customerDetails: null
        }
    }

    getCustomerProducts(products) {
        this.setState({customerProducts: products});
        this.props.displayMachinesFromParent(products);
    }

    getCustomerDetails(customerDetails) {
        this.setState({customerDetails: customerDetails});
        this.props.customerDetailsFromParent(customerDetails);
    }


    renderTableRows(customers) {
        return customers.map(
            (customer, index) =>
                <tr key={index} onClick={() => {
                    this.getCustomerProducts(customer.products);
                    this.getCustomerDetails(customer);
                }}>
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.companyEmail}</td>
                    <td>{customer.company}</td>
                    <td>{customer.marketSector}</td>
                </tr>
        )
    }

    renderTable(customers) {
        return (
            <table className="table table-hover table-with-actions mt-3">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Company Email</th>
                    <th scope="col">Company</th>
                    <th scope="col">Market Sector</th>
                </tr>
                </thead>
                <tbody>
                {this.renderTableRows(customers)}
                </tbody>
            </table>
        )
    }

    render() {
        const {customers} = this.props;
        return (
            <div>
                {this.renderTable(customers)}
            </div>
        )
    }
}

export default Customers;