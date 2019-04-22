import React, { Component } from 'react';
import "./SearchStyling.css"


export default class SearchComponent extends Component {
    state = {
        usersToPrint: [],
        addAFriend: "",
      };

      filterUsers = evt => {
        const matchingUsers = this.props.users.filter(
          user =>{
              return user.purposeId === parseInt(evt.target.value)}
        );
        this.setState({ usersToPrint: matchingUsers })
      };
      addAFriend = evt => {
            const returned = {
              firstUserId: parseInt(sessionStorage.getItem('credentials')),
              secondUserId: parseInt(evt.target.id)
              }
                this.props.addFriend(returned)
                this.props.history.push("/friends")
    }
    render() {
        const usersToPrint = this.state.usersToPrint.length > 0 ? this.state.usersToPrint : this.props.users;
		return (
            <React.Fragment>
              <div className="searchHeading card">
        <h1>Make friends</h1>
        <select onClick={this.filterUsers}>
          {this.props.purposes.map(onePurpose => {
            return (
              <option key={onePurpose.id} value={onePurpose.id}>
               Find friends who are interested in: {onePurpose.type}
              </option>
            );
          })}
        </select>
        </div>
        <section className="foundUsers">
          {usersToPrint.map(user => (
            <div key={user.id} className="card userCards">
              <div className="card-body">
              <img src= {user.pic} alt="userpic" className="searchIcon"></img>
                  <p>Nickname: {user.username}</p>
                  <p>Rank: {user.tier} {user.rank} </p>
                  <p>Plays: {user.champs}</p>
                  <button id={user.id} className="btn btn-primary"
                        onClick={this.addAFriend}
                  >Add Friend</button>
              </div>
            </div>
          ))}
        </section>
        </React.Fragment>
        )
    }

}