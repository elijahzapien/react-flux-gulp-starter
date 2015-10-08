'use strict';

import React, {PropTypes} from 'react';
import Helmet from 'react-helmet';

export default class Home extends React.Component{

    render () {

        let pageTitle = "Home - React, Flux, Gulp Started";

        return (
            <div>
                <Helmet title={pageTitle} />
                <h1>Welcome to the react-flux-gulp-starter!</h1>
                <p>...</p>
            </div>
        );

    }

}
