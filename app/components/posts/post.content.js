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

		const post = this.props.post;
		post.upvotes = (post.upvotes ? parseInt(post.upvotes) : 0) + 1;

		this.setState({ post: post });

		this.props.postActions.updatePost(this.props.post);
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.post._id != nextProps.post._id) {
			this.setState({ post: nextProps.post });
		}
	}

	render() {
		return (
			<div>
				<header>
					<h1>
						{this.props.post.heading}
						<a href="" className="thumb pull-right" title="Upvote" onClick={this.upVote}>
							{this.props.post.upvotes || 0}
							<i className="glyphicon glyphicon-thumbs-up"></i>
						</a>
					</h1>
					<p>By: {this.props.post.author}, {this.props.post.date}</p>
				</header>

				<hr />

				<main>
					<p>{this.props.post.content}</p>
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