import React, { Component } from 'react';
import MessageComponent from './MessageComponent';
import './ChatStyling.css'

export default class ChatComponent extends Component {
	state = {
		userId: sessionStorage.getItem('credentials'),
		text: ''
	};
	scrollToBottom = () => {
		const chatDiv = document.getElementById('chatMessages');
		chatDiv.scrollTop = chatDiv.scrollHeight;
	};

	handleFieldChange = (e) => {
		const stateToChange = {};
		stateToChange[e.target.id] = e.target.value;
		this.setState(stateToChange);
	};
	sendMessage = (e) => {
		e.preventDefault();
		const item = {
			text: this.state.message,
			userId: this.state.userId
		};
		this.props.addMessage(item).then(() => this.props.history.push(`/messages`));
	};
	componentDidMount() {
		const chatDiv = document.getElementById('chatMessages');
		chatDiv.scrollTop = chatDiv.scrollHeight;
	}
	render() {
		return (
			<React.Fragment>
				<div className="daWholeChat">
				<h1 className="chatHeading">Group Chat</h1>
				<div className="chatMessages" id="chatMessages" key={this.state.userId}>
					{this.props.messages.map((message) => {
						return <MessageComponent {...this.props} message={message}/>;
					})}
				</div>
				<div className="chatInput">
					<form className="form-control chat">
						<input
							type="textarea"
							id="message"
							placeholder="Say hey!"
							onChange={this.handleFieldChange}
						/>
						<button type="submit" onClick={this.sendMessage} className="btn btn-primary" >
							Submit
						</button>
					</form>
				</div>
				</div>
			</React.Fragment>
		);
	}
}