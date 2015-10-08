'use strict';

import React from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router, Route, Link } from 'react-router';

import Application from './Application';

import Home from './pages/Home';
import About from './pages/About';
import Resources from './pages/Resources';
import NotFound from './pages/NotFound';

export default (
    <Router component={Application} history={createBrowserHistory()}>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/resources" component={Resources} />
        <Route path="*" component={NotFound} />
    </Router>
)

