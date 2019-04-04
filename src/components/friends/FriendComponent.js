import React, { Component } from 'react';

export default class FriendComponent extends Component {
    state = {
        activeUser: parseInt(this.props.activeUser),
        addFriend: "",
        errorStatement: "",

    }
    render() {
		return (<h1>friendz</h1>
        )
    }

}