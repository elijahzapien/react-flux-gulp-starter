'use strict';

import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

export default class Home extends Component{

    render() {

        let pageTitle = 'Home - React, Flux, Gulp Started';

        return (
            <div>
                <Helmet title={pageTitle} />
                <h1>
                    Welcome to the
                    <br />
                    react-flux-gulp-starter!
                </h1>
                <p>
                    A boilerplate for building <a href='https://facebook.github.io/react/' target='_blank'>React</a> /
                    <a href='https://facebook.github.io/flux/' target='_blank'>Flux</a> apps using
                    <a href='http://alt.js.org/' target='_blank'>Alt</a> and <a href='http://gulpjs.com/' target='_blank'>Gulp</a>.
                    Along with some common tasks and scenarios.
                </p>
            </div>
        );

    }

}

Home.contextTypes = {
    breakpoint: PropTypes.object.isRequired
};
