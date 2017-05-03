class CommentsApi {  

	static getAll(postId) {
		return fetch(`http://localhost:3000/posts/${postId}/comments`).then(response => {
			return response.json();
		}).catch(error => {
			return error;
		});

	}

	static getAll(postId) {
		return fetch(`http://localhost:3000/posts/${postId}/comments`).then(response => {
			return response.json();
		}).catch(error => {
			return error;
		});

	}

	static createComment(comment) {
		const request = new Request(`http://localhost:3000/posts/${comment.postId}/comments`, {
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/json'
			}),
			body: JSON.stringify(comment)
		});

		return fetch(request).then(response => {
			return response.json();
		}).catch(error => {
			return error;
		});
	}
}

export default CommentsApi;



