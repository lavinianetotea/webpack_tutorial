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
                    company: "Fluids Dynamics",
                    marketSector: "Engineering",
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
                    company: "CC Young & Co",
                    marketSector: "Financial",
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
                    company: "Fluids Dynamics",
                    marketSector: "Engineering",
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
                    company: "CC Young & Co",
                    marketSector: "Financial",
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
                    company: "LauraInstal",
                    marketSector: "Instalatii Sanitare",
                    products: []
                }
            ],
            searchResultsFromSearch: null,
            isInputSearchEmpty: true,
            displayCustomerProducts: [],
            displayMachineContainer: 'none'
        };

        this.someFn = this.someFn.bind(this);
        this.emptyInputSearch = this.emptyInputSearch.bind(this);
        this.displayMachines = this.displayMachines.bind(this);
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
                                       displayMachinesFromParent={this.displayMachines}/>
                            <div style={{display: this.state.displayMachineContainer}}>
                                <MachinesList customerMachines={this.state.displayCustomerProducts}/>
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