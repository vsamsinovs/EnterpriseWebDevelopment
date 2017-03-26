import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import * as postActions from '../../actions/posts.actions';

import PostEdit from './post.edit';
import CommentsList from './comments/comments.list';
import CommentCreate from './comments/comment.create';
import PostContent from './post.content';

import toastr from 'toastr';

class PostPage extends React.Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			post: this.props.post
		};

		this.upVote = this.upVote.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.post.id != nextProps.post.id) {
			this.setState({ post: nextProps.post });
		}
	}

	upVote(event) {
		event.preventDefault();

		const post = this.state.post;
		post.upvotes = (post.upvotes ? parseInt(post.upvotes) : 0) + 1;

		this.setState({ post: post });

		this.props.postActions.updatePost(this.state.post);
	}

	render() {
		return (
			<article className="post">
				<section>

					<PostContent post={this.props.post} />

					<Link to={`/posts/edit/${this.props.post.id}`} className="btn btn-primary" activeClassName="active">
						<i className="glyphicon glyphicon-edit"></i>
						Edit Post
						</Link>

					<footer>
						<CommentCreate postId={this.props.post.id} />
						<hr />
						<CommentsList postId={this.props.post.id} />
					</footer>

				</section>
			</article>
		)
	}
}

PostPage.propTypes = {
	post: PropTypes.object.isRequired,
	postActions: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
	let post = { id: 0, author: '', date: '', heading: '', content: '', upvotes: 0 };
	const postId = ownProps.params.id;

	if (state.posts.length > 0) {
		post = Object.assign({}, state.posts.find(post => post.id == postId));
	}

	return {
		post: post
	};
}

function mapDispatchToProps(dispatch) {
	return {
		postActions: bindActionCreators(postActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);