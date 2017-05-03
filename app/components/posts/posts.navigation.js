import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import _ from 'lodash';

class PostsNavigation extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			search: ""
		}

		this.onSearchChange = this.onSearchChange.bind(this);
	}

	onSearchChange(event) {
		this.setState({ search: event.target.value })
	}

	render() {

		const filteredPosts = this.props.posts.filter(post => {
			return post.heading && post.heading.toLowerCase().includes(this.state.search.toLowerCase())
		});

		return (
			<ul className="list-group">
				<li className="list-group-item">
					<div className="input-group">
						<span className="input-group-addon" id="sizing-addon1"><i className="glyphicon glyphicon-search"></i></span>
						<input onChange={this.onSearchChange} className="form-control" placeholder="Search by title" />
					</div>

				</li>
				{filteredPosts.map(post =>

					<li className="list-group-item" key={post._id}>
						<Link to={"/posts/" + post._id} activeClassName="active">
							{post.upvotes || 0}<i className="glyphicon glyphicon-thumbs-up"></i>
							{post.heading}</Link>
					</li>
				)}
			</ul>
		)
	}
};

PostsNavigation.prototypes = {
	posts: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		posts: state.posts
	}
}

export default connect(mapStateToProps)(PostsNavigation);