class PostsApi {

	static getAllPosts() {

		return fetch('http://localhost:8080/api/posts/').then(response => {
			return response.json();
		}).catch(error => {
			return error;
		});

	}

	static updatePost(post) {
		const request = new Request(`http://localhost:8080/api/posts/${post._id}`, {
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
		const request = new Request(`http://localhost:8080/api/posts/`, {
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
		const request = new Request(`http://localhost:8080/api/posts/${postId}`, {
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



