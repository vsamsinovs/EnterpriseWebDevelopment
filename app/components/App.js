import React, { PropTypes } from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';


class App extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				{this.props.children}
				<Footer />
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.object.isRequired
};

export default App;