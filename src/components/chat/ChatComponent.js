import React, { Component } from 'react';
import MessageComponent from './MessageComponent';

export default class ChatComponent extends Component {
	state = {
		userId: sessionStorage.getItem('credentials'),
		message: ''
	};
	handleFieldChange = (e) => {
		const stateToChange = {};
		stateToChange[e.target.id] = e.target.value;
		this.setState(stateToChange);
	};
	Message = (e) => {
		e.preventDefault();
		const messageToAdd = {
			text: this.state.message,
			userId: this.state.userId
		};
		this.props.addMessage(messageToAdd).then(() => this.props.history.push(`/messages`));
	};
	render() {
		return (
			<React.Fragment>
				<div className="chat-messages" id="chat-messages" key={this.state.userId}>
					{this.props.messages.map((message) => {
						return <MessageComponent {...this.props} message={message}/>;
					})}
				</div>
				<div className="chat-input">
					<form className="form-control chat">
						<input
							type="text"
							id="message"
							placeholder="Be nice!"
							onChange={this.handleFieldChange}
						/>
						<button type="submit" onClick={this.Message} className="btn size1button">
							Submit
						</button>
					</form>
				</div>
			</React.Fragment>
		);
	}
}