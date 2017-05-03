import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import App from './components/App';

import Comments from './components/posts/comments/comments.list';
import PostsPage from './components/posts/posts.page';
import PostPage from './components/posts/posts.details';
import PostCreatePage from './components/posts/post.create';
import PostEditPage from './components/posts/post.edit';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={PostsPage} />
		<Route path="/posts" component={PostsPage} >
		
			<Route path="/posts/create" component={PostCreatePage} />
			<Route path="/posts/:_id" component={PostPage} />
			<Route path="/posts/edit/:_id" component={PostEditPage} />
		</Route>
		<Route path="/comments" component={Comments} />
	</Route>
);
