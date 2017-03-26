import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TextArea } from '../../common/Inputs.js';

import { Today } from '../../../globals/Date';

import toastr from 'toastr';

import * as commentActions from '../../../actions/comments.actions';

const getInitialComment = (postId) => {
	return {
		id: 0,
		postId: postId,
		content: "",
		date: Today(),
		author: "Anonymous"
	}
}

class CreateComment extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			comment: getInitialComment(this.props.postId)
		}

		this.saveComment = this.saveComment.bind(this);
		this.updateCommentState = this.updateCommentState.bind(this);
		this.reset = this.reset.bind(this);
	}

	saveComment(event) {
		event.preventDefault();
		this.props.commentActions.createComment(this.state.comment);
		toastr.success("Comment has been successfully submited.");
		this.reset();
	}

	reset() {
		this.setState({
			comment: getInitialComment(this.props.postId)
		});
	}

	updateCommentState(event) {
		const field = event.target.name;
		const comment = this.state.comment;
		comment[field] = event.target.value;
		return this.setState({ comment: comment });
	}

	render() {

		return (
			<div className="well">
				<h4>Leave a Comment:</h4>
				<form role="form">
					<TextArea
						name="content"
						value={this.state.comment.content}
						onChange={this.updateCommentState} />

					<button type="submit" className="btn btn-success"
						onClick={this.saveComment}>
						<i className="glyphicon glyphicon-plus"></i>
						Submit
					</button>
				</form>
			</div>
		);
	}
}

CreateComment.propTypes = {
	postId: PropTypes.number.isRequired,
	commentActions: PropTypes.object.isRequired
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		commentActions: bindActionCreators(commentActions, dispatch)
	};
}

const mapStateToProps = (state, ownProps) => {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateComment)