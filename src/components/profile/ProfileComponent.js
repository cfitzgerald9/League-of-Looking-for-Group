import React, { Component } from 'react';
import './ProfileStyling.css'

export default class ProfileComponent extends Component {
    render() {
        return (
            <React.Fragment >
                <article className ="wholeProfile">
                    {this.props.users.map(user => {
                        if (JSON.stringify(user.id) === sessionStorage.getItem('credentials')) {
                            return <div key={user.id} className="profileInfo">
                            <h1 className="profileSection" key={user.id}>Hey there, {user.username}!</h1>
                            <img src={user.pic} alt=""></img>
                            <p className="profileBio">About me: {user.bio}</p>
                            <p className="profileChamps">I play: {user.champs}</p>
                            <p className="profileRank">I'm currently ranked: {user.tier} {user.rank} </p>
                            <p className="profilePurpose">And I want to play: {this.props.purposes.find(purposeParam => purposeParam.id === user.purposeId).type}</p>
                            <div className="addButton">
                        <button type="button"
                            className="btn btn-primary size1button editButton"
                            onClick={() => {
                                this.props.history.push(`/update`)
                            }}>
                            Update
            </button>
                    </div>
                                </div>
                        }
                    })}
                </article>
            </React.Fragment>)
    }
}