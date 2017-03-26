import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import PostForm from './post.form'
import toastr from 'toastr';

import * as postActions from '../../actions/posts.actions';

class EditPost extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			saving: false,
			post: this.props.post
		}

		this.updatePostState = this.updatePostState.bind(this);
		this.savePost = this.savePost.bind(this);
		this.cancelPost = this.cancelPost.bind(this);
	}

	updatePostState(event) {
		const field = event.target.name;
		const post = this.state.post;
		post[field] = event.target.value;
		return this.setState({ post: post });
	}

	savePost(event) {
		event.preventDefault();
		this.props.postActions.updatePost(this.state.post);
		toastr.success("Post has been updated.");
		browserHistory.push(`/posts/${this.state.post.id}`);		
	}

	cancelPost(event) {
		event.preventDefault();
		browserHistory.push(`/posts/${this.state.post.id}`);
	}

	render() {
		return (
			<div>
				<h1>Edit Post</h1>
				<PostForm
					post={this.props.post}
					onSave={this.savePost}
					onCancel={this.cancelPost}
					onChange={this.updatePostState} />
			</div>
		);
	}
}


EditPost.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);