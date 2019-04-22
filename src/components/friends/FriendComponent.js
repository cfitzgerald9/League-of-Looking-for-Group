import React, { Component } from 'react';
import './FriendStyling.css'

export default class FriendComponent extends Component {
    state = {
        friendsWithStuff: [],
        friends: [],
        users: [],
        friendArray: []

    }


    static getDerivedStateFromProps = (props, state) => {
        const filteredbyUser = props.friends.filter((friend) => friend.firstUserId === parseInt(sessionStorage.getItem('credentials')))
        const mappedbyUser = filteredbyUser.map((each) => each.secondUserId)
        const filteredbyFriend = props.friends.filter((friend) => friend.secondUserId === parseInt(sessionStorage.getItem('credentials')))
        const mappedbyFriend = filteredbyFriend.map((each) => each.firstUserId)
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
        console.log(parseInt(evt.target.id), "this is event id")
        this.props.friends.map(dude => {
            console.log(dude, "yo")
            if (parseInt(evt.target.id) === dude.secondUserId && dude.firstUserId === parseInt(sessionStorage.getItem('credentials')) || parseInt(evt.target.id) === dude.firstUserId && dude.secondUserId === parseInt(sessionStorage.getItem('credentials'))) {
                console.log(parseInt(dude.id), "do u see me")
                this.props.deleteFriend(parseInt(dude.id))
            }
            this.props.history.push("/friends")
        }
        )
    }
    render() {
        return (
            <React.Fragment >
                <h1 className="friendsHeader">Friends</h1>
                <article className="wholeList">
                    {this.state.friendsWithStuff.map(friend => {
                        return <div key={friend.id} className="friendInfo card">
                            <h3 className="profileSection" key={friend.id}>{friend.username}</h3>
                            <img src={friend.pic} alt="" className="friendPic"></img>
                            <p className="profileBio">{friend.bio}</p>
                            <p className="profileChamps">I play: {friend.champs}</p>
                            <p className="profileRank">I'm currently ranked: {friend.tier} {friend.rank} </p>
                            <button id={friend.id} onClick={this.deleteAFriend} className="btn btn-danger btn-sm deleteButton">Delete Me</button> </div>
                    }
                    )}

                </article>
            </React.Fragment>
        )
    }
}
