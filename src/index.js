// @ag : using ES6 modules style
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './views/home.js';
import Blog from './views/blog.js';
import Contact from './views/contact.js';
import Dashboard from './views/dashboard.js';

import "./styles/base.scss";
import "./js/ui.js";


ReactDOM.render(
  <Router>
    <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </Router>,
  document.getElementById("app")
);
