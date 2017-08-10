import React from 'react';
import PrivateHeader from './PrivateHeader';
import NoteList from './NoteList';
import Editor from './Editor';

export default () => {
	return (
		<div>
			<PrivateHeader title="Dashboard" />
			<div className="page-content">
				<div className="sidebar">
					<NoteList />
				</div>
				<div className="main">
					<Editor />
				</div>
			</div>
		</div>
	);
}