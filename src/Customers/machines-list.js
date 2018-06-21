import React, {Component} from 'react';
import ProductCard from "./product-card";

class MachinesList extends Component {
    constructor() {
        super();

        this.state = {
            productsTab: '',
            infoTab: '',
            productsTabStyle: {
                color: "#7a6aeb",
                borderTop: "2px solid #7a6aeb",
                borderRadius: "0"
            },
            infoTabStyle: {
                color: 'black'
            }
        }
    }

    styleProductsTab() {
        this.setState({
            productsTabStyle: {
                color: "#7a6aeb",
                borderTop: "2px solid #7a6aeb",
                borderRadius: "0"
            }
        });
        this.setState({infoTabStyle: {color: 'black'}});

    }

    styleInfoTab() {
        this.setState({productsTabStyle: {color: 'black'}});
        this.setState({
            infoTabStyle: {
                color: "#7a6aeb",
                borderTop: "2px solid #7a6aeb",
                borderRadius: "0"
            }
        });
    }

    displayCustomerProducts(customerMachines) {
        if (customerMachines.length) {
            return customerMachines.map((machine, index) =>
                <div key={index} className="row">
                    <div className="col-6">
                        <ProductCard key={index} customerMachine={machine}/>
                    </div>
                    <div className="col-6">
                        <nav className="nav navbar-expand-lg navbar-light p-0">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <button className="btn btn-purple">Maintenance</button>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-purple">Pulse</button>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-purple">Update log</button>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-purple">
                                        <i className="fa fa-file" aria-hidden="true"></i>
                                        Notes
                                    </button>
                                </li>
                            </ul>
                        </nav>

                        <div className="row">
                            <div className="col-6">Status</div>
                            <div className="col-6">
                                <span className="badge badge-pill badge-warning activeBadge">Active</span>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-6">Maintenance type</div>
                            <div className="col-6">Premium</div>
                        </div>

                        <div className="row">
                            <div className="col-6">Duration</div>
                            <div className="col-6">5 years</div>
                        </div>

                        <div className="row">
                            <div className="col-6">Activation date</div>
                            <div className="col-6">14.12.2017</div>
                        </div>

                        <div className="row">
                            <div className="col-6">Expires on</div>
                            <div className="col-6">07.03.2023</div>
                        </div>
                    </div>
                </div>)
        } else {
            return <p>There are no products for this customer</p>
        }
    }

    render() {
        const {customerMachines} = this.props;
        return (
            <div>
                <ul className="nav nav-tabs">
                    <li className="nav-item" onClick={() => {
                        this.setState({productsTab: 'active'});
                        this.setState({infoTab: ''});
                        this.styleProductsTab();
                    }
                    }>
                        <a
                            className={`nav-link ${this.state.productsTab}`}
                            style={this.state.productsTabStyle}
                            href="#products"
                            data-toggle="tab"
                            id="products_tab">Products and maintenance plans</a>
                    </li>
                    <li className="nav-item" onClick={() => {
                        this.setState({productsTab: ''});
                        this.setState({infoTab: 'active'});
                        this.styleInfoTab();
                    }
                    }>
                        <a
                            className={`nav-link ${this.state.infoTab}`}
                            style={this.state.infoTabStyle}
                            href="#info"
                            data-toggle="tab"
                            id="info_tab">Account information</a>
                    </li>
                </ul>

                <div className="tab-content">
                    <div id="products" className="tab-pane active">
                        {this.displayCustomerProducts(customerMachines)}
                    </div>
                </div>

                <div id="info" className="tab-pane">

                </div>
            </div>
        )
    }
}

export default MachinesList;