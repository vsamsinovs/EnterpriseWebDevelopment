import * as types from './actionTypes.actions';
import commentsApi from '../api/comments.api';

export function loadComments(postId) {

	return function (dispatch) {

		return commentsApi.getAll(postId).then(comments => {
			dispatch(loadCommentsSuccess(comments));
		}).catch(error => {
			throw (error);
		});

	};
}

export function createComment(comment) {

	return function (dispatch) {

		return commentsApi.createComment(comment).then(responseComment => {
			dispatch(createCommentsSuccess(responseComment));
		}).catch(error => {
			throw (error);
		});

	};
}

export function loadCommentsSuccess(comments) {
	return { type: types.LOAD_COMMENTS_SUCCESS, comments };
}

export function createCommentsSuccess(comment) {
	return { type: types.CREATE_COMMENT_SUCCESS, comment };
}