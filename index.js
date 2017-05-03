"use strict";

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './app/routes';

import { Provider } from 'react-redux';
import configureStore from './app/store/configStore';

import { loadPosts } from './app/actions/posts.actions';
import { loadComments } from './app/actions/comments.actions';

import 'toastr/toastr.less';

import './style/main.less';

import './style/buttons.less';
import './style/form.less';
import './style/blog.less';

import toastr from 'toastr';

toastr.options = {
	newestOnTop: true,
	progressBar: true,
	closeButton: true
} 

const store = configureStore();

store.dispatch(loadPosts());

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>,
	document.getElementById('app')
);

