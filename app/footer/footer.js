import React from 'react';

import Navigation from '../components/common/Navigation';

import "./footer.less";


class Footer extends React.Component{

	render(){
		return(
			<footer>
				<div className="container">
				© vsamsinovs
				<Navigation />
				</div>
			</footer>
		);
	}
};

export default Footer;