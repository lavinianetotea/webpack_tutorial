import React, {Component} from 'react';
import MessageView from './message-view';
import EmployeeView from "./employee-view";

class MessageList extends Component {
    constructor() {
        super();
        this.state = {
            messages: [
                {
                    from: 'John',
                    message: 'The event will start next week',
                    status: 'unread'
                },
                {
                    from: 'Martha',
                    message: 'I will be traveling soon',
                    status: 'read'
                },
                {
                    from: 'Jacob',
                    message: 'Talk later. Have a great day!',
                    status: 'read'
                }
            ],
            employees: [
                {
                    firstName: 'Lavinia',
                    lastName: 'Netotea',
                    role: 'software-developer'
                },
                {
                    firstName: 'Robert',
                    lastName: 'Calin',
                    role: 'software-troll'
                },{
                    firstName: 'Cristian',
                    lastName: 'Drincu',
                    role: 'software-developer'
                },{
                    firstName: 'Adi',
                    lastName: 'NuStiuCumIlCheama',
                    role: 'junior-software-developer'
                }
            ],
            color: 'red',
            height: '200px'
        }
    }

    render() {
        const messageViews = this.state.messages.map(
            (message, index) =>
                <MessageView key={index} message={message} color={this.state.color} height={this.state.height}/>
        );

        const employeeViews = this.state.employees.map(
            (employee, index) =>
                <EmployeeView key={index} employee={employee}/>
        );

        return (
            <div>
                <h1>List of Messages</h1>
                {employeeViews} {messageViews}
            </div>
        )
    }
}

export default MessageList;