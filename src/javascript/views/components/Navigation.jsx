'use strict';

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Navigation extends Component {

    isActive(target) {
        let isActive = this.props.history.isActive;
        return isActive(target) ? 'selected' : '';
    }

    render() {
        let homeClass = this.isActive('/');
        let aboutClass = this.isActive('/about');
        let referencesClass = this.isActive('/references');
        let deadClass = this.isActive('/akldsjfladsjwiqy');

        return (
            <ul className="navigation">
                <li className={homeClass}><Link to="/">Home</Link></li>
                <li className={aboutClass}><Link to="/about">About</Link></li>
                <li className={referencesClass}><Link to="/references">References</Link></li>
                <li className={deadClass}><Link to="/akldsjfladsjwiqy">404</Link></li>
            </ul>
        );
    }
}

Navigation.propTypes = {
    history: PropTypes.object.isRequired
};

