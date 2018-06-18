import React, {Component} from 'react';
import Search from "./Maintenance Plans/search";
import MaintenancePlans from "./Maintenance Plans/maintenance-plans";
import AppNavbar from "./app-navbar";

class MasterMaintenancePlans extends Component {
    constructor() {
        super();
        this.state = {
            maintenancePlans: [
                {
                    type: "",
                    status: "active",
                    quoteNumber: "Q-0018766645",
                    serialNumber: "SN-078439234456",
                    customer: "Ergothel",
                    createdOn: "01/10/2017, 10:42 AM"
                },
                {
                    type: "",
                    status: "active",
                    quoteNumber: "Q-0028766645",
                    serialNumber: "SN-068439234456",
                    customer: "Ageea Energy",
                    createdOn: "01/10/2017, 10:21 AM"
                },
                {
                    type: "",
                    status: "active",
                    quoteNumber: "Q-0038766645",
                    serialNumber: "SN-058439234456",
                    customer: "Fluids Dynamics",
                    createdOn: "01/10/2017, 10:07 AM"
                },
                {
                    type: "",
                    status: "active",
                    quoteNumber: "Q-0048766645",
                    serialNumber: "SN-048439234456",
                    customer: "Stafron",
                    createdOn: "31/09/2017, 05:32 AM"
                },
                {
                    type: "",
                    status: "expired",
                    quoteNumber: "Q-0058766645",
                    serialNumber: "SN-038439234456",
                    customer: "Fluids Dynamics",
                    createdOn: "31/09/2017, 04:47 AM"
                },
                {
                    type: "",
                    status: "active",
                    quoteNumber: "Q-0068766645",
                    serialNumber: "SN-028439234456",
                    customer: "Repsol",
                    createdOn: "31/09/2017, 04:16 AM"
                },
                {
                    type: "",
                    status: "pending",
                    quoteNumber: "Q-0078766645",
                    serialNumber: "SN-018439234456",
                    customer: "",
                    createdOn: "31/09/2017, 03:52 AM"
                }
            ],
            searchResultsFromSearch: null
        };
        this.someFn = this.someFn.bind(this);
    }

    someFn(dataCollectionFromChild) {
        this.setState({searchResultsFromSearch: dataCollectionFromChild});
    }

    getMaintenancePlans() {
        return this.state.searchResultsFromSearch === null ? this.state.maintenancePlans : this.state.searchResultsFromSearch;
    }

    render() {
        let {maintenancePlans, searchResultsFromSearch} = this.state;
        return (
            <div>
                <AppNavbar/>
                <div className="row">
                    <div className="col-2"></div>
                    <div style={{borderRadius: '0'}} className="card col-8 mt-3">
                        <div className="card-body">
                            <Search callbackFromParent={this.someFn} maintenancePlans={maintenancePlans}/>
                            <MaintenancePlans maintenancePlans={this.getMaintenancePlans()}/>
                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        );
    }
}

export default MasterMaintenancePlans;