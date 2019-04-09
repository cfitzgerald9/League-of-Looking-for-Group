import React, { Component } from "react"
import UserAPIManager from '../../modules/UserAPIManager'
import './AuthStyling.css'

export default class Login extends Component {
    state = {
        email: "",
        password: ""
    }
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleLogin = e => {
        e.preventDefault();
        UserAPIManager.getByEmail(this.state.email).then(user => {
          let errorMessage = "";
          if (user.length === 0) {
            errorMessage =
              "We couldn't find that email address in our records. Would you like to create an account?";
            this.setState({ errorMessage: errorMessage });
          } else {
            if (user[0].password === this.state.password) {
        sessionStorage.setItem(
                    "credentials",
                    JSON.stringify(user[0].id)
                  );
              this.props.history.push("/");
            } else {
              errorMessage = "Your password was incorrect. Please try again.";
              this.setState({ errorMessage: errorMessage });
            }
          }
        });
      };
  render(){
        return (
            <React.Fragment>
              <div className="loginForm">
            <form onSubmit={this.handleLogin }>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputEmail" className="emailLabel">
                    Email address
                </label>
                <input onChange={this.handleFieldChange} type="email"
                       id="email"
                       placeholder="Email address"
                       required="" autoFocus="" />
                <label htmlFor="inputPassword" className="passwordLabel">
                      Password
                </label>
                <input onChange={this.handleFieldChange} type="password"
                       id="password"
                       placeholder="Password"
                       required="" />
                <button type="submit" className="loginButton btn btn-success size1button" >
                    Sign in
                </button>
            </form>
<button className= " btn btn-success size1button registerButton"onClick={() => this.props.history.push("/register")}>
Or register a new account!
</button>
</div>
</React.Fragment>
        )
    }
}