import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Navigation extends Component {
    render() {
        return (
            <ul className="navigation">
                <li><Link to="/" activeClassName="focus">Home</Link></li>
                <li><Link to="/about" activeClassName="focus">About</Link></li>
                <li><Link to="/resources" activeClassName="focus">Resources</Link></li>
                <li><Link to="/akldsjfladsjwiqy" activeClassName="focus">404</Link></li>
            </ul>
        );
    }
}

Navigation.propTypes = {
    history: PropTypes.object.isRequired
};
