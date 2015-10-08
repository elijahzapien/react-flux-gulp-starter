'use strict';

import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router';

export default class Navigation extends Component {
    render () {
        var isActive = this.context.history.isActive;
        var homeClass = isActive('/') ? 'selected' : '';
        var aboutClass = isActive('/about') ? 'selected' : '';
        var resourcesClass = isActive('/resources') ? 'selected' : '';
        var deadClass = isActive('/sgfjhsdgfjhsdgfjsd') ? 'selected' : '';
        return (
            <ul className="navigation">
                <li className={homeClass}><Link to='/' activeClassName="selected">Home</Link></li>
                <li className={aboutClass}><Link to='/about' activeClassName="selected">About</Link></li>
                <li className={resourcesClass}><Link to='/resources' activeClassName="selected">Resources</Link></li>
                <li className={deadClass}><Link to='/sgfjhsdgfjhsdgfjsd' activeClassName="selected">404</Link></li>
            </ul>
        );
    }
}

