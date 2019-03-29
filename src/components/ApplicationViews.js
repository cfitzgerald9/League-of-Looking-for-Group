import { Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';

export default class ApplicationViews extends Component {
	state = {
		users: [],
		friends: [],
		messages: [],
		purposes: [],
    }
    render() {
		return (
			<React.Fragment>
				<Route
					exact
					path="/"
					render={(props) => {
						return null
					}} />
                </React.Fragment>
                )
}
}