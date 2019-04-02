import React, { Component } from "react"

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

    handleLogin = (e) => {
        e.preventDefault();
        sessionStorage.setItem(
            "credentials",
            JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        )
        this.props.history.push("/")
    }
  render(){
        return (
            <React.Fragment>
            <form onSubmit={this.handleLogin }>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputEmail">
                    Email address
                </label>
                <input onChange={this.handleFieldChange} type="email"
                       id="email"
                       placeholder="Email address"
                       required="" autoFocus="" />
                <label htmlFor="inputPassword">
                    Password
                </label>
                <input onChange={this.handleFieldChange} type="password"
                       id="password"
                       placeholder="Password"
                       required="" />
                <button type="submit" >
                    Sign in
                </button>
            </form>
<div>
<button onClick={() => this.props.history.push("/register")}>
Or register a new account!
</button>
</div>
</React.Fragment>
        )
    }
}