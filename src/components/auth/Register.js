import React, { Component } from "react"
import UserAPIManager from '../../modules/UserAPIManager'
import RiotAPIManager from '../../modules/RiotAPIManager'
import RiotConfig from '../../modules/RiotConfig'
import './AuthStyling.css'
export default class Register extends Component {
    state = {
        email: "",
        password: "",
        username: "",
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
            summonerName: this.state.userSummonerName,
            bio: this.state.userBio,
            champs: this.state.userChamps,
            // summonerId: "",
            pic: this.state.userPic,
            rank: "",
            tier: ""

        }
        UserAPIManager.getByEmail(this.state.email).then(user => {
            this.props.registerUser(userToPost)
            .then(user => {
                RiotAPIManager.getByName(user.summonerName, RiotConfig.apiKey)
                .then(response => RiotAPIManager.getById(response.id, RiotConfig.apiKey))
                    .then(response => {const userToPatch = {
                                        username: this.state.userName,
                                        email: this.state.userEmail,
                                        password: this.state.userPassword,
                                        purposeId: parseInt(this.state.userPurposeId),
                                        summonerName: this.state.userSummonerName,
                                        bio: this.state.userBio,
                                        champs: this.state.userChamps,
                                        // summonerId: response[0].summonerId,
                                        rank: response[0].rank,
                                        tier: response[0].tier,
                                        pic: this.state.userPic}
                    UserAPIManager.patchUser(user.id, userToPatch)})
                sessionStorage.setItem("credentials", JSON.stringify(user.id));
                this.props.refreshUsers()
                this.props.history.push("/");

            })
        })
    }


    render() {
                return(
            <form onSubmit = { this.constructNewUser } className = "registrationForm" >
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
                        <label htmlFor="inputSummoner">
                            Summoner name
                </label>
                        <input onChange={this.handleFieldChangeUser} type="text"
                            id="userSummonerName"
                            placeholder="Summoner name"
                            required="" />
                        <label htmlFor="inputChamps">
                            What champions do you play?
                </label>
                        <textarea onChange={this.handleFieldChangeUser} type="textarea"
                            id="userChamps"
                            placeholder="champs"
                            required="" />
                        <label htmlFor="inputPic">
                            Link a picture!
                </label>
                        <input onChange={this.handleFieldChangeUser} type="url"
                            id="userPic"
                            placeholder="Pic"
                            required="" />
                        <label htmlFor="inputBio">
                            Tell us about yourself!
                </label>
                        <textarea onChange={this.handleFieldChangeUser} type="textrea"
                            id="userBio"
                            placeholder="Bio"
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
                        <button type="submit" className="registerUser">
                            Register!
                </button>
            </form>

        )
    }
}