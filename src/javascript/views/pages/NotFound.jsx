import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class NotFound extends Component {

    render() {
        const pageTitle = '404 Page Not Found - React, Flux, Gulp Started';

        return (
            <div>
                <Helmet title={pageTitle} />
                <h1>404 (Not Found)</h1>
            </div>
        );
    }

}
