import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends Component {
	logout = () => {
		sessionStorage.removeItem('credentials');
	};
	buttonPicker = () => {
		if (sessionStorage.getItem('credentials') !== null) {
			return (
				<Link className="nav-link" onClick={this.logout} to="/">
					Logout
				</Link>
			);
		} else {
			return (
				<Link className="nav-link" to="/login">
					Login
				</Link>
			);
		}
	};

	render() {
		return (
			<nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
				<ul className="nav nav-pills nav-fill">
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
		);
	}
}

export default NavBar;