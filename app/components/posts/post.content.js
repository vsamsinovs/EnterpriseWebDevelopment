import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as postActions from '../../actions/posts.actions';

class PostContent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			post: this.props.post
		}

		this.upVote = this.upVote.bind(this);
	}

	upVote(event) {
		event.preventDefault();

		const post = this.state.post;
		post.upvotes = (post.upvotes ? parseInt(post.upvotes) : 0) + 1;

		this.setState({ post: post });

		this.props.postActions.updatePost(this.state.post);
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.post.id != nextProps.post.id) {
			this.setState({ post: nextProps.post });
		}
	}

	render() {
		return (
			<div>
				<header>
					<h1>
						{this.state.post.heading}
						<a href="" className="thumb pull-right" title="Upvote" onClick={this.upVote}>
							{this.state.post.upvotes || 0}
							<i className="glyphicon glyphicon-thumbs-up"></i>
						</a>
					</h1>
					<p>By: {this.state.post.author}, {this.state.post.date}</p>
				</header>

				<hr />

				<main>
					<p>{this.state.post.content}</p>
				</main>
			</div>
		)
	}

}

PostContent.propTypes = {
	post: PropTypes.object.isRequired,
	postActions: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
	return {};
}

function mapDispatchToProps(dispatch) {
	return {
		postActions: bindActionCreators(postActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContent);