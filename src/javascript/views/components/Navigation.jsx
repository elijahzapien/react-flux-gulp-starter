'use strict';

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Navigation extends Component {

    isActive(target) {
        return this.props.history.isActive(target) ? 'selected' : '';
    }

    render() {
        let homeClass = this.isActive('/');
        let aboutClass = this.isActive('/about');
        let resourcesClass = this.isActive('/resources');
        let deadClass = this.isActive('/akldsjfladsjwiqy');

        return (
            <ul className="navigation">
                <li className={homeClass}><Link to="/">Home</Link></li>
                <li className={aboutClass}><Link to="/about">About</Link></li>
                <li className={resourcesClass}><Link to="/resources">Resources</Link></li>
                <li className={deadClass}><Link to="/akldsjfladsjwiqy">404</Link></li>
            </ul>
        );
    }
}

Navigation.propTypes = {
    history: PropTypes.object.isRequired
};

