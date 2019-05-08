import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import 'bootswatch/dist/darkly/bootstrap.min.css';

class NavBar extends Component {
    state = {
        isLoggedIn: ""
    }
    logout = () => {
        sessionStorage.removeItem('credentials');
        this.props.history.replace("/")
    };
    render() {
        return (
            <React.Fragment>
                <nav className="navbar-nav navbar-fixed-top nav-fill bg-primary navigation">
                    <ul className=" nav nav-pills">
                        <li className="nav-item">
                            {sessionStorage.getItem("credentials") !== null ? (
                                <Link className="nav-link"
                                to="/" onClick={this.logout}>
                                Sign Out</Link>
                                ) : (
                                <Link
                                className="nav-link" to="/login">
                                Sign In </Link>
                            ) }
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                My Profile
						</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/friends">
                                Friends
						</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/messages">
                                Chat
						</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/search">
                                Search
						</Link>
                        </li>
                    </ul>
                </nav>
            </React.Fragment>
        );
    }
}

export default NavBar;