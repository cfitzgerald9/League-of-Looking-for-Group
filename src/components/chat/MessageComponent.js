import React, { Component } from 'react';

export default class MessageComponent extends Component {
	render() {
		return (
			<React.Fragment>
				<div key={this.props.message.id} className="messageContainer">
					<span id={this.props.message.userId} key={this.props.message.userId} className="singleMessage">
						{this.props.message.user.username}:
					</span>{' '}
					{this.props.message.text}
				</div>
			</React.Fragment>
		);
	}
}