class PostsApi {

	static getAllPosts() {

		return fetch('http://localhost:3000/posts/').then(response => {
			return response.json();
		}).catch(error => {
			return error;
		});

	}

	static updatePost(post) {
		const request = new Request(`http://localhost:3000/posts/${post.id}`, {
			method: 'PUT',
			headers: new Headers({
				'Content-Type': 'application/json'
			}),
			body: JSON.stringify(post)
		});

		return fetch(request).then(response => {
			return response.json();
		}).catch(error => {
			return error;
		});
	}

	static createPost(post) {
		const request = new Request(`http://localhost:3000/posts/`, {
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/json'
			}),
			body: JSON.stringify(post)
		});

		return fetch(request).then(response => {
			return response.json();
		}).catch(error => {
			return error;
		});
	}


	static deletePost(postId) {
		const request = new Request(`http://localhost:3000/posts/${postId}`, {
			method: 'DELETE',
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		});
		return fetch(request).then(response => {
			return response.json();
		}).catch(error => {
			return error;
		});
	}
}

export default PostsApi;



