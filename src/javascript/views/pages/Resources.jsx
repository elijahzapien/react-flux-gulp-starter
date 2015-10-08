'use strict';

import React from 'react';
import Helmet from 'react-helmet';

import {connectToStores}  from 'fluxible-addons-react';
import ResourcesStore from '../../stores/ResourcesStore';

class Resources extends React.Component {

    render () {

        let pageTitle = 'Resources - React, Flux, Gulp Started';

        let resources = this.props.resources;
        let OUTPUT = [];

        resources.map(function(resource){
            OUTPUT.push(
                <p>
                    {`name: ${resource.title}. `}
                    {'link: '}<a href={resource.path}>{resource.path}</a>
                </p>
            );
        });

        return (
            <div>
                <Helmet title={pageTitle} />
                <h1>{'Resources'}</h1>
                <p>{OUTPUT}</p>
            </div>
        );

    }

};

Resources = connectToStores(Resources, [ResourcesStore], (context, props) => ({
    resources: context.getStore(ResourcesStore).getAll(),
}));

export default Resources;
