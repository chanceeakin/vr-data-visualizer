import { Router, Route, browserHistory } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';

import Intro from './containers/Intro';
import App from './containers/vr-app';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Intro}/>
    <Route path="/vr" component={App}/>
    <Route path="/vr/:twitterHandle" component={App}/>
  </Router>
), document.getElementById('app'));
