import React from 'react';
import { Link, IndexLink } from 'react-router';

const Navigation = () => {
	return (
		<ul className="nav navbar-nav navbar-right">
			<li className="active">
				<IndexLink to="/" activeClassName="active">Posts</IndexLink>
			</li>
		</ul>
	)
}

export default Navigation; 