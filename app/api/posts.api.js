class PostsApi {

	static getAllPosts() {

		return fetch('https://vs-enterpriseweb-api.eu-gb.mybluemix.net/api/posts/').then(response => {
			return response.json();
		}).catch(error => {
			return error;
		});

	}

	static updatePost(post) {
		const request = new Request(`https://vs-enterpriseweb-api.eu-gb.mybluemix.net/api/posts/${post._id}`, {
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
		const request = new Request(`https://vs-enterpriseweb-api.eu-gb.mybluemix.net/api/posts/`, {
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/json'
			}),
			body: JSON.stringify(post)
		});

		return fetch(request).then(response => {
			console.log("all good", response);
			return response.json();
		}).catch(error => {
			console.log("error",error);
			return error;
		});
	}


	static deletePost(postId) {
		const request = new Request(`https://vs-enterpriseweb-api.eu-gb.mybluemix.net/api/posts/${postId}`, {
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



