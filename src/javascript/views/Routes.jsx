import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Application from './Application';

import Home from './pages/Home';
import About from './pages/About';
import Resources from './pages/Resources';
import NotFound from './pages/NotFound';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Application}>
            <IndexRoute component={Home} />
            <Route path="/about" component={About} />
            <Route path="/resources" component={Resources} />
            <Route path="*" component={NotFound} />
        </Route>
    </Router>
);
