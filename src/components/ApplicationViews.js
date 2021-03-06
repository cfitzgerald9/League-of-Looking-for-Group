import { Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import ProfileComponent from './profile/ProfileComponent';
import FriendComponent from './friends/FriendComponent';
import ChatComponent from './chat/ChatComponent'
import SearchComponent from './search/SearchComponent'
import ProfileEditComponent from './profile/ProfileEditComponent'
import Register from './auth/Register';
import Login from './auth/Login'
import UserAPIManager from '../modules/UserAPIManager'
import ChatAPIManager from '../modules/ChatAPIManager';
import FriendsAPIManager from '../modules/FriendsAPIManager'



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
    addMessage = (newItem) => {
        return fetch(`http://localhost:5002/messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then((d) => d.json())
            .then(() => {
                fetch('http://localhost:5002/messages?_expand=user')
                    .then((r) => r.json())
                    .then((messages) => this.setState({ messages: messages }));
            });
    };
    updateMessage = (editedObject) => {
        return fetch(`http://localhost:5002/messages/${editedObject.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editedObject)
        })
            .then((data) => data.json())
            .then(() =>
                fetch('http://localhost:5002/messages?_expand=user').then((r) => r.json()).then((messages) => {
                    this.setState({
                        messages: messages
                    });
                })
            );
    };
    findFriend = (name) => {
		return FriendsAPIManager.getFriendName(name);
	};
      addFriend = (friendObject) => {
        return FriendsAPIManager.addFriend(friendObject)
          .then(FriendsAPIManager.getAllFriends)
          .then(friends => {
            this.setState({ friends: friends })
          })
      }

      deleteFriend = (id) => {
        return FriendsAPIManager.deleteFriend(id)
          .then(FriendsAPIManager.getAllFriends)
          .then(friends => {
            this.setState({ friends: friends })
          })
      }
    componentDidMount() {
        const newState = {};
        UserAPIManager.getAllUsers()
            .then(users => (newState.users = users))
            .then(UserAPIManager.getAllPurposes)
            .then(purposes => (newState.purposes = purposes))
            .then(ChatAPIManager.getUserMessages)
            .then(messages => newState.messages = messages)
            .then(FriendsAPIManager.getAllFriends)
            .then(friends => newState.friends = friends)
            .then(() => this.setState(newState));
    }
    render() {
        return (
            <React.Fragment>
                <Route
                    path="/login"
                    render={props => {
                        return <Login {...props}
                            users={this.state.users} />
                    }}
                />
                <Route
                    path="/register"
                    render={props => {
                        return <Register {...props}
                            purposes={this.state.purposes}
                            registerUser={this.registerUser}
                            refreshUsers={this.refreshUsers} />;
                    }}
                />
                <Route
                    exact
                    path="/"
                    render={(props) => {
                        if (this.isAuthenticated()) {
                            return <ProfileComponent {...props}
                                users={this.state.users}
                                purposes={this.state.purposes} />
                        } else {
                            return <Redirect to="/login" />;
                        }
                    }
                    } />
                    <Route
                    exact
                    path="/update"
                    render={(props) => {
                        if (this.isAuthenticated()) {
                            return <ProfileEditComponent {...props}
                                users={this.state.users}
                                purposes={this.state.purposes}
                                refreshUsers={this.refreshUsers}/>
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
                            return <FriendComponent {...props}
                            users={this.state.users}
                            friends={this.state.friends}
                            purposes={this.state.purposes}
                            findFriend={this.findFriend}
                            deleteFriend={this.deleteFriend}/>
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
                            return <ChatComponent {...props}
                                messages={this.state.messages}
                                users={this.state.users}
                                addMessage={this.addMessage} />
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
                                users={this.state.users}
                                purposes={this.state.purposes}
                                addFriend= {this.addFriend} />
                        } else {
                            return <Redirect to="/login" />;
                        }
                    }
                    } />
            </React.Fragment>
        )
    }
}