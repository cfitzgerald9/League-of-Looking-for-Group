import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootswatch/dist/darkly/bootstrap.min.css';

class NavBar extends Component {
    logout = () => {
        sessionStorage.removeItem('credentials');
    };
    render() {
        return (
            <React.Fragment>
                <nav className="navbar-nav bg-dark">
                    <ul className="nav-pills">
                        <li className="nav-item">
                            {sessionStorage.getItem("credentials") === null ? (
                                <Link
                                className="nav-link" to="/login">
                                Sign In </Link>
                            ) : (
                                <Link className="nav-link"
                                to="/" onClick={this.logout}>
                                Sign Out</Link>
                                )}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
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