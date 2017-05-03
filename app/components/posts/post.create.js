import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {browserHistory} from 'react-router';

import { Today } from '../../globals/Date';

import PostForm from './post.form'

import * as postActions from '../../actions/posts.actions';

class CreatePost extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			saving: false,
			post: this.props.post
		}

		this.updatePostState = this.updatePostState.bind(this);
		this.savePost = this.savePost.bind(this);
	}

	updatePostState(event) {
		const field = event.target.name;
		const post = this.state.post;
		post[field] = event.target.value;
		return this.setState({ post: post });
	}

	savePost(event) {
		event.preventDefault();
		this.props.postActions.createPost(this.state.post)
	}

	cancelPost(event) {
		event.preventDefault();
		browserHistory.push(`/posts/`);
	}

	render() {
		return (
			<div>
				<h1>New Post</h1>
				<PostForm
					post={this.props.post}
					onSave={this.savePost}
					onCancel={this.cancelPost}
					onChange={this.updatePostState} />
			</div>
		);
	}
}


CreatePost.propTypes = {
	postActions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
	return {
		post: { _id: 0, author: '', date: Today(), heading: '', content: '' }
	};
}

function mapDispatchToProps(dispatch) {
	return {
		postActions: bindActionCreators(postActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);