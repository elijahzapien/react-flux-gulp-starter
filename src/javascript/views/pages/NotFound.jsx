'use strict';

import React from 'react';
import Helmet from 'react-helmet';

export default class NotFound extends React.Component{

    render() {

        let pageTitle = '404 Page Not Found - React, Flux, Gulp Started';

        return (
            <div>
                <Helmet title={pageTitle} />
                <h1>404 (Not Found)</h1>
            </div>
        );

    }

}

