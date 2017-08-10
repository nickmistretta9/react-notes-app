import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Session} from 'meteor/session';
import {Meteor} from 'meteor/meteor';
import {browserHistory} from 'react-router';
import {Notes} from '../api/notes';

export class Editor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title:'',
			body:''
		};
	}
	handleBodyChange(e) {
		const body = e.target.value;
		this.setState({body});
		this.props.call('notes.update', this.props.note._id, {body});
	}
	handleTitleChange(e) {
		const title = e.target.value;
		this.setState({title});
		this.props.call('notes.update', this.props.note._id, {title});
	}
	deleteExistingNote() {
		this.props.call('notes.remove', this.props.note._id);
		this.props.browserHistory.push('/dashboard');
	}
	componentDidUpdate(prevProps, prevState) {
		const currentNoteId = this.props.note ? this.props.note._id : undefined;
		const prevNoteId = prevProps.note ? prevProps.note._id : undefined;
		if(currentNoteId && currentNoteId !== prevNoteId) {
			this.setState({
				title: this.props.note.title,
				body: this.props.note.body
			});
		}
	}
	render() {
		if(this.props.note) {
			return (
				<div className="editor">
					<input value={this.state.title} placeholder="Untitled Note" onChange={this.handleTitleChange.bind(this)} />
					<textarea value={this.state.body} placeholder="Your Note Here" onChange={this.handleBodyChange.bind(this)}></textarea>
					<button onClick={this.deleteExistingNote.bind(this)}>Delete Note</button>
				</div>
			);
		} else {
			return (
				<div className="wrapper">
					<p>
						{this.props.selectedNoteId ? 'Note Not Found' : 'Pick or Create a Note To Get Started'}
					</p>
				</div>
			);
		}
	}
}

Editor.propTypes = {
	note: React.PropTypes.object,
	selectedNoteId: React.PropTypes.string,
	call: React.PropTypes.func.isRequired,
	browserHistory: React.PropTypes.object.isRequired
};

export default createContainer(() => {
	const selectedNoteId = Session.get('selectedNoteId');
	return {
		selectedNoteId,
		note:Notes.findOne(selectedNoteId),
		call:Meteor.call,
		browserHistory
	};
}, Editor);