import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import PostForm from './post.form'
import toastr from 'toastr';
import { Link } from 'react-router';


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
		this.deletePost = this.deletePost.bind(this);
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
	}

	cancelPost(event) {
		event.preventDefault();
		browserHistory.push(`/posts/${this.state.post._id}`);
	}

	deletePost(event) {
		event.preventDefault();

		if (confirm("Are you sure you want to permanently delete selected item?")) {
			this.props.postActions.deletePost(this.state.post._id);
			toastr.error("Post has been successfully deleted.");
		}
	}

	render() {
		return (
			<div>
				<h1>
					<div className="col-md-10 no-padding">
						Edit Post
					</div>
					<div className="col-md-2 no-padding">
						<button type="button" className="btn btn-danger" onClick={this.deletePost}>
							<i className="glyphicon glyphicon-remove"></i>
							Delete
						</button>
					</div>
				</h1>
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
	let post = { _id: 0, author: '', date: '', heading: '', content: '', upvotes: 0 };
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

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);