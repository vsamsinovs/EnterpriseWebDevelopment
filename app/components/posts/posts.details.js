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
		if (this.props.post._id!= nextProps.post._id) {
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

					<Link to={`/posts/edit/${this.props.post._id}`} className="btn btn-primary" activeClassName="active">
						<i className="glyphicon glyphicon-edit"></i>
						Edit Post
						</Link>

					<footer>
						<CommentCreate postId={this.props.post._id} />
						<hr />
						<CommentsList postId={this.props.post._id} />
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
	const postId = ownProps.params._id;
	
	if (state.posts.length > 0) {
		post = Object.assign({}, state.posts.find(post => post._id == postId));
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