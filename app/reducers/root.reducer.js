
import {combineReducers} from 'redux';  
import posts from './posts.reducer';
import comments from './comments.reducer';

const rootReducer = combineReducers({  
  posts,
  comments
})

export default rootReducer; 