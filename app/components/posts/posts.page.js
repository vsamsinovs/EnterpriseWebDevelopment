import React from 'react';
import PostsNavigation from './posts.navigation';
import * as Toastr from 'toastr';

import PostsList from './posts.list';

import { Link } from 'react-router';

class PostsPage extends React.Component {

	render() {
		var re = this.props.children || <PostsList />;
		return (
			<div>
				<div className="container">
					<div className="col-md-4">
						<Link to={'/posts/create'} className="btn btn-primary">
							<i className="glyphicon glyphicon-plus"></i>Create Post
					</Link>

						<PostsNavigation />
					</div>
					<div className="col-md-8">
						{re}
					</div>
				</div>
			</div>
		)
	}
}

export default PostsPage;
