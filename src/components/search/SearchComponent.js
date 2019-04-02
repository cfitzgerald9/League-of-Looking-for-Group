import React, { Component } from 'react';

export default class SearchComponent extends Component {
    state = {
        usersToPrint: []
      };

      filterUsers = evt => {
        const matchingUsers = this.props.users.filter(
          user =>{console.log(user, evt.target.value)
              return user.purposeId === parseInt(evt.target.value)}
        );
        this.setState({ usersToPrint: matchingUsers })
      };
    render() {
        const usersToPrint = this.state.usersToPrint.length > 0 ? this.state.usersToPrint : this.props.users;
		return (
            <React.Fragment>
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
        <section className="foundUsers">
          {usersToPrint.map(user => (
            <div key={user.id} className="card">
              <div className="card-body">
                  <p>Nickname: {user.username}</p>
                  <p>In-game: {user.summonerName}</p>
                  <button>Add Friend</button>
              </div>
            </div>
          ))}
        </section>
        </React.Fragment>
        )
    }

}