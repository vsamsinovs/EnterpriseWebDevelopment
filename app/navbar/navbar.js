import $ from "jquery";
import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import Navigation from '../components/common/Navigation';

import './navbar.less';

const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-default">
				<div className="container">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<IndexLink to="/" className="navbar-brand" activeClassName="active">

							<div className="logo"><span>VS</span></div>
						</IndexLink>
					</div>
					<div id="navbar" className="navbar-collapse collapse">
						<ul className="nav navbar-nav navbar-right">
							<Navigation />
						</ul>

					</div>
				</div>
			</nav>

			<header className="header-image">
				<div className="headline">
					<div className="container">
						<Link to='/'> <h4><strong>VS</strong>AMSINOVS blog</h4></Link>
					</div>
				</div>
			</header>

		</div>
	);
};

export default Navbar; 