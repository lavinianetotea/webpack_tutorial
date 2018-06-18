import React, {Component} from 'react';

class AppNavbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
                <a className="navbar-brand pl-2 pr-2">
                    <img src="./src/assets/img/syneto.svg" width="60" height="60"/> | Central
                </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">New issue</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Support guide <i className="fa fa-download" aria-hidden="true"></i></a>

                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Issues list <i className="fa fa-download" aria-hidden="true"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Support plans <i className="fa fa-download" aria-hidden="true"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Field instalation guide <i className="fa fa-download"
                                                                                        aria-hidden="true"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">OS base image <i className="fa fa-download" aria-hidden="true"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default AppNavbar;