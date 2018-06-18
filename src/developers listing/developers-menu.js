import React, {Component} from 'react';

const menuItems = {
    User: "User",
    Developer: "Developer",
    Support: "Support",
    Operations: "Operations",
    Administrator: "Administrator",
    Marketing: "Marketing",
    Manuals: "Manuals",
    DemoMachines: "Demo machines",
    Renewals: "Renewals"
};

class DevelopersMenu extends Component {
    constructor() {
        super();
        this.state = {
            activeItem: 'User'
        }
    }

    handleMenuItemChange(menuItem) {
        this.setState({activeItem: menuItem});
    }

    setTextColor(menuItem) {
        console.log(menuItem);
        return this.state.activeItem === menuItem ? '#ffffff' : ''
    }

    render() {
        return (
            <ul className="list-group">
                <li style={{border: 'none' }} className={`list-group-item ${this.state.activeItem === 'User' ? 'active' : ''}`}
                    onClick={() => {this.handleMenuItemChange('User'); }}>
                    <a style={{color: this.setTextColor('User')}} href='#'>User</a>
                </li>
                <li style={{border: 'none'}} className={`list-group-item ${this.state.activeItem === 'Developer' ? 'active' : ''}`}
                    onClick={() => {this.handleMenuItemChange('Developer');}}>
                    <a style={{color: this.setTextColor('Developer')}} href='#'>Developer</a>
                </li>
                <li style={{border: 'none'}} className={`list-group-item ${this.state.activeItem === 'Support' ? 'active' : ''}`}
                    onClick={() => {this.handleMenuItemChange('Support');}}>
                    <a style={{color: this.setTextColor('Support')}} href='#'>Support</a>
                </li>
                <li style={{border: 'none'}} className={`list-group-item ${this.state.activeItem === 'Operations' ? 'active' : ''}`}
                    onClick={() => {this.handleMenuItemChange('Operations');}}>
                    <a style={{color: this.setTextColor('Operations')}} href='#'>Operations</a>
                </li>
                <li style={{border: 'none'}} className={`list-group-item ${this.state.activeItem === 'Administrator' ? 'active' : ''}`}
                    onClick={() => {this.handleMenuItemChange('Administrator');}}>
                    <a style={{color: this.setTextColor('Administrator')}} href='#'>Administrator</a>
                </li>
                <li style={{border: 'none'}} className={`list-group-item ${this.state.activeItem === 'Marketing' ? 'active' : ''}`}
                    onClick={() => {this.handleMenuItemChange('Marketing');}}>
                    <a style={{color: this.setTextColor('Marketing')}} href='#'>Marketing</a>
                </li>
            </ul>
        )
    }
}

export default DevelopersMenu;