import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactDOM from 'react-dom';

import * as commentsActions from '../../../actions/comments.actions';


class CommentsList extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			_id: "",
			comments: this.props.comments,
			postId: this.props.postId
		}
	}

	componentWillMount() {
		if (this.props.postId) {
			this.props.commentActions.loadComments(this.props.postId);
		}
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.postId != nextProps.postId) {
			this.setState({ postId: nextProps.postId });
			this.props.commentActions.loadComments(nextProps.postId);
		}
		else {
			this.setState({ comments: nextProps.comments });
		}
	}

	render() {
		let comments = this.state.comments.map((comment) =>
			<div className="media" key={comment._id}>
				<a className="pull-left" href="#">
					<img className="media-object" src="http://placehold.it/64x64" alt="" />
				</a>
				<div className="media-body">
					<h4 className="media-heading">{comment.author}
						<small> {comment.date}</small>
					</h4>
					{comment.content}
				</div>
			</div>
		);

		let commentsRender = comments.length ? comments : <p>Be the first to leave a comment</p>;

		return (
			<section>
				{commentsRender}
			</section>
		)
	}
};

CommentsList.prototypes = {
	comments: PropTypes.array.isRequired,
	commentActions: PropTypes.object.isRequired,
	postId: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		comments: state.comments
	}
}

function mapDispatchToProps(dispatch) {
	return {
		commentActions: bindActionCreators(commentsActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);