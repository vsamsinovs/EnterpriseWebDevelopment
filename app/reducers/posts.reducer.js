import * as types from '../actions/actionTypes.actions';
import initialState from './initialState';
import { browserHistory } from 'react-router';

import _ from 'lodash';

export default function postsReducer(state = initialState.posts, action) {
    let posts = [];
    switch (action.type) {
        case types.LOAD_POSTS_SUCCESS:
            return _.sortBy(action.posts, post => {
                return -post.upvotes
            });
        case types.UPDATE_POST_SUCCESS:
            browserHistory.push(`/posts/${action.post._id}`);
            posts = [
                ...state.filter(post => post._id !== action.post._id),
                Object.assign({}, action.post)
            ];
            return _.sortBy(posts, post => {
                return -post.upvotes
            });
        case types.CREATE_POST_SUCCESS:

            browserHistory.push(`/posts/${action.post._id}`);
            posts = [
                ...state.filter(post => post._id !== action.post._id), Object.assign({}, action.post)
            ];
            return _.sortBy(posts, post => {
                return -post.upvotes
            });
        case types.DELETE_POST_SUCCESS:
            browserHistory.push(`/posts/`);
            posts = [
                ...state.filter(post => post._id !== action.postId)
            ];
            return _.sortBy(posts, post => {
                return -post.upvotes
            });
        default:
            return state;
    }
}