import React, { Component } from "react"
import UserAPIManager from "../../modules/UserAPIManager";


export default class ProfileEditComponent extends Component {
    state = {
        id:"",
        newUsername: "",
        newBio: "",
        newPic: "",
        newChamps:""
    };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingUser = evt => {
    evt.preventDefault();
      const editedUser = {
        username: this.state.newUsername,
        purposeId: this.state.purposeId,
        bio: this.state.newBio,
        champs: this.state.newChamps,
        pic: this.state.newPic,
      };
     UserAPIManager.patchUser(sessionStorage.getItem('credentials'), editedUser)
     .then(UserAPIManager.getAllUsers())
        .then(() => this.props.history.push("/"));
  };

  componentDidMount() {
    UserAPIManager.getOneUser(sessionStorage.getItem('credentials'))
    .then(user => {
        console.log(user)
      this.setState({
        newUsername: user.username,
        newBio: user.bio,
        newPic: user.pic,
        newChamps:user.champs,
      })
    })
  }

  render() {
    return (
      <React.Fragment>
        <form className="">
          <div className="">
            <label htmlFor="bio">Update bio</label>
            <input
              type="text"
              required
              className=""
              onChange={this.handleFieldChange}
              id="newBio"
              value={this.state.newBio}
            />
          </div>
          <div className="form-group">
            <label htmlFor="champs">Change champion list</label>
            <input
              type="text"
              required
              className=""
              onChange={this.handleFieldChange}
              id="newChamps"
              value={this.state.newChamps}
            />
          </div>
          <div className="">
            <label htmlFor="pic">Change picture</label>
            <input
              type="url"
              required
              className=""
              onChange={this.handleFieldChange}
              id="newPic"
              value={this.state.newPic}
            />
          </div>
          <button
            type="submit"
            onClick={this.updateExistingUser}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}