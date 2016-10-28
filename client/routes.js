/**
 * Created by meng on 2016/9/29.
 */
import React from 'react';
import {
	Route,
	IndexRoute
} from 'react-router';

import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';

export default (
	<Route path="/" component={App} >
    	<IndexRoute component={Greetings} />
    	<Route path="signup" component={SignupPage} />
  	</Route>
)