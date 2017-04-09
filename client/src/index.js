import { Router, Route, hashHistory } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';

import Intro from './containers/Intro';
import App from './containers/vr-app';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Intro}/>
    <Route path="/vr" component={App}/>
  </Router>
), document.getElementById('app'));
