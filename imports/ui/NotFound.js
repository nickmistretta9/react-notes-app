import React from 'react';
import {Link} from 'react-router';

export default () => {
	return (
		<div className="boxed-view">
			<div className="box">
				<h1>Page Not Found</h1>
				<p>Hmmm, we're unable to find that page.</p>
				<Link className="button link" to="/">Head Home</Link>
			</div>
		</div>
	);
}