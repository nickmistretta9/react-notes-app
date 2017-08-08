import React from 'react';
import {Accounts} from 'meteor/accounts-base';
import {createContainer} from 'meteor/react-meteor-data';

export const PrivateHeader = (props) => {
	return (
		<div className="top-bar">
			<div className="header-content">
				<h1>{props.title}</h1>
				<button className="button link-text" onClick={() => props.handleLogout()}>Logout</button>
			</div>
		</div>
	);
};

PrivateHeader.propTypes = {
	title: React.PropTypes.string.isRequired,
	handleLogout: React.PropTypes.func.isRequired
};

export default createContainer(() => {
	return {
		handleLogout: () => Accounts.logout()
	};
}, PrivateHeader);