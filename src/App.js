import React, {Component} from 'react';
import DevelopersTable from "./developers listing/developers-table"
import DevelopersMenu from "./developers listing/developers-menu";

class App extends Component {
    constructor() {
        super();
        this.state = {
            developers: [
                {
                    name: "John Smith",
                    email: "helpdesk@fluids.com",
                    userRole: "Developer"
                },
                {
                    name: "Dominic Bolger",
                    email: "helpdesk@ccyoung.co.uk",
                    userRole: "Developer"
                },
                {
                    name: "John Smith",
                    email: "helpdesk@fluids.com",
                    userRole: "Developer"
                },
                {
                    name: "Dominic Bolger",
                    email: "helpdesk@ccyoung.co.uk",
                    userRole: "Developer"
                },
                {
                    name: "John Smith",
                    email: "helpdesk@fluids.com",
                    userRole: "Developer"
                },
                {
                    name: "Dominic Bolger",
                    email: "helpdesk@ccyoung.co.uk",
                    userRole: "Developer"
                },
                {
                    name: "John Smith",
                    email: "helpdesk@fluids.com",
                    userRole: "Developer"
                },
                {
                    name: "Dominic Bolger",
                    email: "helpdesk@ccyoung.co.uk",
                    userRole: "Developer"
                }
            ]
        }
    }

    render() {
        const {developers} = this.state;
        return (
            <div className="row">
                <div className="card col-2">
                    <div className='card-body'>
                        <ul className="list-group">
                            <DevelopersMenu />
                        </ul>
                    </div>
                </div>
                <div className="card col-10">
                    <div className='card-body'>
                        <DevelopersTable developers={developers}/>
                    </div>
                </div>
            </div>
        )
    }

}

export default App;