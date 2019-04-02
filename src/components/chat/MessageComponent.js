import React, { Component } from 'react';

export default class MessageComponent extends Component {
	render() {
		return (
			<React.Fragment>
				<div key={this.props.message.id} className="chat">
					<span id={this.props.message.userId} className="chat-name">
						{this.props.message.user.username}:
					</span>{' '}
					{this.props.message.text}
				</div>
			</React.Fragment>
		);
	}
}