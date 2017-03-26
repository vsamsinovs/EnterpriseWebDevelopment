import * as types from './actionTypes.actions';
import postsApi from '../api/posts.api';

export function loadPosts() {

	return function (dispatch) {

		return postsApi.getAllPosts().then(posts => {
			dispatch(loadPostsSuccess(posts));
		}).catch(error => {
			throw (error);
		});
	};
}

export function updatePost(post) {
	return function (dispatch) {
		return postsApi.updatePost(post).then(responsePost => {
			dispatch(updatePostSuccess(responsePost));
		}).catch(error => {
			throw (error);
		});
	}
}

export function createPost(post) {
	return function (dispatch) {
		return postsApi.createPost(post).then(responsePost => {
			dispatch(createPostSuccess(responsePost));
		}).catch(error => {
			throw (error);
		});
	}
}

function loadPostsSuccess(posts) {
	return { type: types.LOAD_POSTS_SUCCESS, posts };
}

function updatePostSuccess(post){
	return { type: types.UPDATE_POST_SUCCESS, post }
}

function createPostSuccess(post){
	return { type: types.CREATE_POST_SUCCESS, post }
}