import React, {Component} from 'react';
import AppNavbar from "./app-navbar";
import Search from "./Customers/search";
import Customers from "./Customers/customers";
import MachinesList from "./Customers/machines-list";

class MasterCustomers extends Component {
    constructor() {
        super();
        this.state = {
            customers: [
                {
                    name: "John Nicolae",
                    email: "helpdesk@fluids.com",
                    companyEmail: "helpdesk@fluids.com",
                    phoneNumber: '02072911690',
                    company: "Fluids Dynamics",
                    marketSector: "Engineering",
                    city: 'London',
                    country: 'United Kingdom',
                    address: 'Chancery House, 52-46 Chancery Lane',
                    numberOfEmployees: '51-100',
                    products: [
                        {
                            serialNumber: "SYN170000128",
                            softwareVersion: "4.1.0",
                            hardwareId: "bf68052d5f110a3af58447707ebe343c",
                            model: "VMWare Virtual Platfrom",
                            productName: "syneto-os-976357f1",
                            maintenancePlan:
                                {
                                    status: 'active',
                                    maintenanceType: 'Premium',
                                    duration: '5 years',
                                    activationDate: '14.12.2017',
                                    expiresOn: '07.03.2023'
                                }
                        },
                        {
                            serialNumber: "SYN170000128",
                            softwareVersion: "4.1.0",
                            hardwareId: "bf68052d5f110a3af58447707ebe343c",
                            model: "VMWare Virtual Platfrom",
                            productName: "syneto-os-976357f1",
                            maintenancePlan:
                                {
                                    status: 'pending',
                                    maintenanceType: '',
                                    duration: '',
                                    activationDate: '',
                                    expiresOn: ''
                                }
                        }
                    ]
                },
                {
                    name: "Dominic Bolger",
                    email: "helpdesk@ccyoung.co.uk",
                    companyEmail: "helpdesk@ccyoung.co.uk",
                    phoneNumber: '02072911690',
                    company: "CC Young & Co",
                    marketSector: "Financial",
                    city: 'London',
                    country: 'United Kingdom',
                    address: 'Chancery House, 52-46 Chancery Lane',
                    numberOfEmployees: '51-100',
                    products: [
                        {
                            serialNumber: "ABC170000128",
                            softwareVersion: "4.1.0",
                            hardwareId: "bf68052d5f110a3af58447707ebe343c",
                            model: "VMWare Virtual Platfrom",
                            productName: "syneto-os-976357f1",
                            maintenancePlan:
                                {
                                    status: 'pending',
                                    maintenanceType: '',
                                    duration: '',
                                    activationDate: '',
                                    expiresOn: ''
                                }
                        },
                        {
                            serialNumber: "ABC170000128",
                            softwareVersion: "4.1.0",
                            hardwareId: "bf68052d5f110a3af58447707ebe343c",
                            model: "VMWare Virtual Platfrom",
                            productName: "syneto-os-976357f1",
                            maintenancePlan:
                                {
                                    status: 'pending',
                                    maintenanceType: '',
                                    duration: '',
                                    activationDate: '',
                                    expiresOn: ''
                                }
                        }
                    ]
                },
                {
                    name: "John Smith",
                    email: "helpdesk@fluids.com",
                    companyEmail: "helpdesk@fluids.com",
                    phoneNumber: '',
                    company: "Fluids Dynamics",
                    marketSector: "Engineering",
                    city: '',
                    country: '',
                    address: '',
                    numberOfEmployees: '',
                    products: [
                        {
                            serialNumber: "SYN170000128",
                            softwareVersion: "4.1.0",
                            hardwareId: "bf68052d5f110a3af58447707ebe343c",
                            model: "VMWare Virtual Platfrom",
                            productName: "syneto-os-976357f1",
                            maintenancePlan:
                                {
                                    status: 'pending',
                                    maintenanceType: '',
                                    duration: '',
                                    activationDate: '',
                                    expiresOn: ''
                                }
                        },
                        {
                            serialNumber: "SYN170000128",
                            softwareVersion: "4.1.0",
                            hardwareId: "bf68052d5f110a3af58447707ebe343c",
                            model: "VMWare Virtual Platfrom",
                            productName: "syneto-os-976357f1",
                            maintenancePlan:
                                {
                                    status: 'pending',
                                    maintenanceType: '',
                                    duration: '',
                                    activationDate: '',
                                    expiresOn: ''
                                }
                        }
                    ]
                },
                {
                    name: "Dominic Bolger",
                    email: "helpdesk@ccyoung.co.uk",
                    companyEmail: "helpdesk@ccyoung.co.uk",
                    phoneNumber: '',
                    company: "CC Young & Co",
                    marketSector: "Financial",
                    city: '',
                    country: '',
                    address: '',
                    numberOfEmployees: '',
                    products: [
                        {
                            serialNumber: "SYN170000128",
                            softwareVersion: "4.1.0",
                            hardwareId: "bf68052d5f110a3af58447707ebe343c",
                            model: "VMWare Virtual Platfrom",
                            productName: "syneto-os-976357f1",
                            maintenancePlan:
                                {
                                    status: 'pending',
                                    maintenanceType: '',
                                    duration: '',
                                    activationDate: '',
                                    expiresOn: ''
                                }

                        },
                        {
                            serialNumber: "SYN170000128",
                            softwareVersion: "4.1.0",
                            hardwareId: "bf68052d5f110a3af58447707ebe343c",
                            model: "VMWare Virtual Platfrom",
                            productName: "syneto-os-976357f1",
                            maintenancePlan:
                                {
                                    status: 'pending',
                                    maintenanceType: '',
                                    duration: '',
                                    activationDate: '',
                                    expiresOn: ''
                                }
                        }
                    ]
                },
                {
                    name: "Laura Gaura",
                    email: "laura.gaura@yahoo.com",
                    companyEmail: "inst_sanit@yahoo.com",
                    phoneNumber: '',
                    company: "LauraInstal",
                    marketSector: "Instalatii Sanitare",
                    city: '',
                    country: '',
                    address: '',
                    numberOfEmployees: '',
                    products: []
                }
            ],
            searchResultsFromSearch: null,
            isInputSearchEmpty: true,
            displayCustomerProducts: [],
            displayMachineContainer: 'none',
            customerDetails: {}
        };

        this.someFn = this.someFn.bind(this);
        this.emptyInputSearch = this.emptyInputSearch.bind(this);
        this.displayMachines = this.displayMachines.bind(this);
        this.customerDetails = this.customerDetails.bind(this);
    }

    someFn(dataCollectionFromChild) {
        this.setState({searchResultsFromSearch: dataCollectionFromChild});
    }

    emptyInputSearch(dataFromChild) {
        this.setState({isInputSearchEmpty: dataFromChild});
        this.setState({searchResultsFromSearch: null});
    }

    displayMachines(productCollectionFromChild) {
        this.setState({displayCustomerProducts: productCollectionFromChild});
        if (productCollectionFromChild) {
            this.setState({displayMachineContainer: 'block'});
        }
    }

    customerDetails(customerDetailsFromChild) {
        this.setState({customerDetails: customerDetailsFromChild});
    }

    getCustomers() {
        return this.state.searchResultsFromSearch === null || this.state.isInputSearchEmpty === true ? this.state.customers : this.state.searchResultsFromSearch;
    }

    render() {
        let {customers} = this.state;
        return (
            <div>
                <AppNavbar/>
                <div className="row">
                    <div className="col-2"></div>
                    <div style={{borderRadius: '0'}} className="card col-8 mt-3">
                        <div className="card-body">
                            <Search callbackFromParent={this.someFn} emptySearchFromParent={this.emptyInputSearch}
                                    customers={customers}/>
                            <Customers customers={this.getCustomers()}
                                       displayMachinesFromParent={this.displayMachines}
                                       customerDetailsFromParent={this.customerDetails}/>
                            <div style={{display: this.state.displayMachineContainer}}>
                                <MachinesList customers={customers}
                                              customerMachines={this.state.displayCustomerProducts}
                                              customerDetails={this.state.customerDetails}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        );
    }
}

export default MasterCustomers;