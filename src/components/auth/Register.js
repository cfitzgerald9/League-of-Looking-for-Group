import React, { Component } from "react"
import UserAPIManager from '../../modules/UserAPIManager'
export default class Register extends Component {
    state = {
        email: "",
        password: "",
        username: "",
        summonerName: "",
        purposeId: ""
    }

    handleFieldChangeUser = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };


    constructNewUser = evt => {
        evt.preventDefault();
        const userToPost = {
            username: this.state.userName,
            email: this.state.userEmail,
            password: this.state.userPassword,
            purposeId: parseInt(this.state.userPurposeId),
            summonerName: this.state.userSummonerName
        }
        UserAPIManager.getOneUser(this.state.email).then(user => {
            this.props.registerUser(userToPost).then(user => {
                sessionStorage.setItem("credentials", JSON.stringify(user.id));
                this.props.history.push("/");
                this.props.refreshUsers()
            })
        })
    }


    render() {
        return (
            <form onSubmit={this.constructNewUser}>
                <h1 className="h3 mb-3 font-weight-normal">Please register an account.</h1>
                <label htmlFor="inputEmail">
                    Email address
                </label>
                <input onChange={this.handleFieldChangeUser} type="email"
                    id="userEmail"
                    placeholder="Email address"
                    required="" autoFocus="" />
                <label htmlFor="inputEmail">
                    Username
                </label>
                <input onChange={this.handleFieldChangeUser} type="text"
                    id="userName"
                    placeholder="Username"
                    required="" autoFocus="" />
                <label htmlFor="inputPassword">
                    Password
                </label>
                <input onChange={this.handleFieldChangeUser} type="password"
                    id="userPassword"
                    placeholder="Password"
                    required="" />
                <label htmlFor="inputPassword">
                    Summoner name
                </label>
                <input onChange={this.handleFieldChangeUser} type="text"
                    id="userSummonerName"
                    placeholder="Summoner name"
                    required="" />

                <label htmlFor="purpose">What are you interested in?</label>
                <select onChange={this.handleFieldChangeUser}
                    name="purpose"
                    id="userPurposeId"
                    required="">
                    <option value="">Select a purpose</option>
                    {this.props.purposes.map(e => (
                        <option key={e.id} id={e.id} value={e.id}>
                            {e.type}
                        </option>
                    ))}
                </select>
                <button type="submit">
                    Register!
                </button>
            </form>

        )
    }
}