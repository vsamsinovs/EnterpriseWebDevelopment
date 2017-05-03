import * as types from '../actions/actionTypes.actions';
import initialState from './initialState';
import { browserHistory } from 'react-router';

export default function commentsReducer(state = initialState.comments, action) {
	switch (action.type) {
		case types.LOAD_COMMENTS_SUCCESS:
			return action.comments
		case types.CREATE_COMMENT_SUCCESS:
			return [
				...state.filter(c => c._id !== action.comment._id),
				Object.assign({}, action.comment)
			];
		default:
			return state;
	}
}