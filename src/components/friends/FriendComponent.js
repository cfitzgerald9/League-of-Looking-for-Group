import React, { Component } from 'react';

export default class FriendComponent extends Component {
    // Array to contain all the New York businesses

    render() {
		return (
            <React.Fragment >
                <article className ="wholeProfile">
                    {this.props.friends.map(singleFriend => {
                        if (singleFriend.firstUserId === parseInt(sessionStorage.getItem('credentials')) || singleFriend.id === parseInt(sessionStorage.getItem('credentials'))) {
                            return <div key={singleFriend.id} className="profileInfo">
                            <h3 className="profileSection" key={singleFriend.id}>{singleFriend.username}</h3>
                            <img src={singleFriend.pic} alt=""></img>
                            <p className="profileBio">About me: {singleFriend.bio}</p>
                            <p className="profileChamps">I play: {singleFriend.champs}</p>
                            <p className="profileRank">I'm currently ranked: {singleFriend.tier} {singleFriend.rank} </p>
                                </div>
                        }
                    })}
                </article>
            </React.Fragment>)
    }
}