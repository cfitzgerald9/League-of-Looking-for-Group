import React, { Component } from 'react';

export default class FriendComponent extends Component {
    state = {
        friendsWithStuff: [],
        friends: [],
        users: [],
        friendArray: []

    }


    static getDerivedStateFromProps = (props, state) => {
        const filteredbyUser = props.friends.filter((friend) => friend.firstUserId === parseInt(sessionStorage.getItem('credentials')))
        console.log(filteredbyUser, "this is filteredbyUser")
        const mappedbyUser = filteredbyUser.map((each) => each.secondUserId)
        console.log(mappedbyUser, "this is mappedbyUser")
        const filteredbyFriend = props.friends.filter((friend) => friend.secondUserId === parseInt(sessionStorage.getItem('credentials')))
        console.log(filteredbyFriend, "this is filteredbyFriend")
        const mappedbyFriend = filteredbyFriend.map((each) => each.firstUserId)
        console.log(mappedbyFriend, "this is mappedbyFriend")
        const friendArray = mappedbyFriend.concat(mappedbyUser)
        console.log(friendArray, "this is friendArray")
        const friendsWithStuff = []
        friendArray.forEach(id => {
            const friendWithStuff = props.users.find((user) => user.id === id)
            console.log(friendWithStuff, id, "this is id")
            friendsWithStuff.push(friendWithStuff)
        }
        )
        return { friendsWithStuff: friendsWithStuff }
    }
    deleteAFriend = evt => {
        this.props.deleteFriend(evt.target.id)
        this.props.history.push("/friends")
    }

    render() {
        return (
            <React.Fragment >
                <article className="wholeProfile">
                    {this.state.friendsWithStuff.map(friend => {
                        return <div key={friend.id} id={friend.id} className="profileInfo">
                            <h3 className="profileSection" key={friend.id}>{friend.username}</h3>
                            <img src={friend.pic} alt=""></img>
                            <p className="profileBio">About me: {friend.bio}</p>
                            <p className="profileChamps">I play: {friend.champs}</p>
                            <p className="profileRank">I'm currently ranked: {friend.tier} {friend.rank} </p>
                            <button onClick={this.props.deleteAFriend}>Delete Friend</button></div>
                    }
                    )}
                </article>
            </React.Fragment>
        )
    }
}
