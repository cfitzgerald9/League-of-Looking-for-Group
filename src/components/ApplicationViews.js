import { Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import ProfileComponent from './profile/ProfileComponent';
import FriendComponent from './friends/FriendComponent';
import ChatComponent from './chat/ChatComponent'
import SearchComponent from './search/SearchComponent'
import Register from './auth/Register';
import Login from './auth/Login'
import UserAPIManager from '../modules/UserAPIManager'
import RiotAPIManager from '../modules/RiotAPIManager'
import RiotConfig from '../modules/RiotConfig'

export default class ApplicationViews extends Component {
    state = {
        users: [],
        friends: [],
        messages: [],
        purposes: [],
    }
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null
    registerUser = (userObject) => UserAPIManager.postUser(userObject);

	refreshUsers = () =>
		UserAPIManager.getAllUsers().then((parsedUsers) => {
			this.setState({ users: parsedUsers });
		});
    componentDidMount() {
        const newState = {};
        UserAPIManager.getAllUsers()
          .then(users => (newState.users = users))
          .then(UserAPIManager.getAllPurposes)
          .then(purposes => (newState.purposes = purposes))
          .then(RiotAPIManager.getByName("meshaisataco", RiotConfig.apiKey))
          .then(() => this.setState(newState));
      }
    render() {
        return (
            <React.Fragment>
                <Route
                    path="/login"
                    render={props => {
                        return <Login {...props}/>
                    }}
                />
                  <Route
                    path="/register"
                    render={props => {
                        return <Register {...props}
                        purposes = {this.state.purposes}
                        registerUser ={this.registerUser}
                        refreshUsers = {this.refreshUsers} />;
                    }}
                />
                <Route
                    exact
                    path="/"
                    render={(props) => {
                        if (this.isAuthenticated()) {
                            return <ProfileComponent {...props} />
                        } else {
                            return <Redirect to="/login" />;
                        }
                    }
                    } />
                <Route
                    exact
                    path="/friends"
                    render={(props) => {
                        if (this.isAuthenticated()) {
                        return <FriendComponent {...props} />
                    } else {
                        return <Redirect to="/login" />;
                    }
                }
                } />
                <Route
                    exact
                    path="/messages"
                    render={(props) => {
                        if (this.isAuthenticated()) {
                        return <ChatComponent {...props} />
                    } else {
                        return <Redirect to="/login" />;
                    }
                }
                } />
                <Route
                    exact
                    path="/search"
                    render={(props) => {
                        if (this.isAuthenticated()) {
                        return <SearchComponent {...props}
                        users= {this.state.users}
                        purposes={this.state.purposes} />
                    } else {
                        return <Redirect to="/login" />;
                    }
                }
                } />
            </React.Fragment>
        )
    }
}