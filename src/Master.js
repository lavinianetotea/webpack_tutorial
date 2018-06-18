import React, {Component} from 'react';
import MachinesList from "./Customer Machines/machines_list";
import AppNavbar from "./app-navbar";

class Master extends Component {
    constructor() {
        super();
        this.state = {
            customerMachines: [
                {
                    productName: "syneto-os-976357f1",
                    serialNumber: "SYN170000128",
                    softwareVersion: "4.1.0",
                    maintenancePlan: {
                        supportType: "Advanced",
                        expirationDate: "16-01-2019"
                    },
                    hardwareId: "bf68052d5f110a3af58447707ebe343c",
                    model: "VMWare Virtual Platfrom"

                },
                {
                    productName: "syneto-os-976357f1",
                    serialNumber: "SYN170000128",
                    softwareVersion: "4.1.0",
                    maintenancePlan: {
                        supportType: "Advanced",
                        expirationDate: "16-01-2019"
                    },
                    hardwareId: "bf68052d5f110a3af58447707ebe343c",
                    model: "VMWare Virtual Platfrom"

                }
            ]
        }
    }

    render() {
        const {customerMachines} = this.state;
        return (
            <div>
                <AppNavbar/>
                <div className="row">
                    <div className="col-2"></div>
                    <div style={{backgroundColor: 'white'}} className="row col-8">
                        <div style={{borderRight: "solid 1px #dfdfdf", paddingRight: '0'}} className="col-6 mt-3 mb-4">
                            <p style={{color: 'gray', fontSize: '18px'}}>Machines</p>
                            <MachinesList customerMachines={customerMachines}/>
                        </div>
                        <div className="col-6 mt-3 mb-4">
                            <p style={{color: 'gray', fontSize: '18px'}}>Pulse</p>
                            <div style={{border: '1px solid #80808080', marginBottom: '30px', height: '181px'}}></div>
                            <div className="ml-2">
                                <p style={{color: 'gray', fontSize: '18px'}}>Update Log</p>
                                <p style={{fontSize: '14px'}}><strong>2018 Feb 12</strong> &emsp;Succesful update 3.2.8
                                </p>
                                <p style={{fontSize: '14px'}}><strong>2018 Jan 04</strong> &emsp;Succesful update 3.2.0
                                </p>
                                <p style={{fontSize: '14px'}}><strong>2017 Aug 26</strong> &emsp;Failed update to 3.2.0
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        )
    }
}

export default Master;