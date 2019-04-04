import React, { Component } from 'react';
import MessageComponent from './MessageComponent';

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
				<div className="chatMessages" id="chatMessages" key={this.state.userId}>
					{this.props.messages.map((message) => {
						return <MessageComponent {...this.props} message={message}/>;
					})}
				</div>
				<div className="chatInput">
					<form className="form-control chat">
						<input
							type="text"
							id="message"
							placeholder="Say hey!"
							onChange={this.handleFieldChange}
						/>
						<button type="submit" onClick={this.sendMessage} className="btn btn-success size1button" >
							Submit
						</button>
					</form>
				</div>
			</React.Fragment>
		);
	}
}