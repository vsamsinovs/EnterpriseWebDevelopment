class CommentsApi {

	static getAll(postId) {
		return fetch(`https://vs-enterpriseweb-api.eu-gb.mybluemix.net/api/posts/${postId}/comments`).then(response => {
			return response.json();
		}).catch(error => {
			return error;
		});

	}

	static createComment(comment) {
		const request = new Request(`https://vs-enterpriseweb-api.eu-gb.mybluemix.net/api/posts/${comment.postId}/comments`, {
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



