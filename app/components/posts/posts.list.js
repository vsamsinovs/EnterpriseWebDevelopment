import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import PostContent from './post.content';

class PostList extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		const render = this.props.posts.map(post => {
			return <article className="post" key={post._id}>	
				<section>
					<PostContent post={post}/>

					<Link to={`/posts/${post._id}`} className="btn btn-default" activeClassName="active">
						Read More
					</Link>
				</section>
			</article>
		});

		return (
			<div>
				{render}
			</div>
		)
	}
}

PostList.prototypes = {
	posts: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		posts: state.posts
	}
}

export default connect(mapStateToProps)(PostList);