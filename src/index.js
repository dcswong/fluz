import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import Home from './modules/homepage';

ReactDOM.render(
  <App />,
  // <Router>
  //
  //   <ul>
  //     <li><Link to="/app">Testing</Link></li>
  //   </ul>
  //
  //   <Switch>
  //     <Route exact path="/home" component={Home}/>
  //   </Switch>
  // </Router>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
