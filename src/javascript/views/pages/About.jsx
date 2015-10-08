'use strict';

import React from 'react';
import Helmet from 'react-helmet';

export default class About extends React.Component {

    render() {

        let pageTitle = 'About - React, Flux, Gulp Started';

        return (
            <div>
                <Helmet title={pageTitle} />
                <h1>About</h1>
                <p>...</p>
            </div>
        );
    }

};
