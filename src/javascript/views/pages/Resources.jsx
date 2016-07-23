import React, { Component, PropTypes } from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import Helmet from 'react-helmet';

import ResourcesStore from '../../stores/ResourcesStore';

class Resources extends Component {

    static getStores() {
        return [ResourcesStore];
    }

    static getPropsFromStores() {
        return ResourcesStore.getState();
    }

    render() {

        let pageTitle = 'Resources - React, Flux, Gulp Started';

        let resources = this.props.resources;
        let OUTPUT = [];

        resources.map(function(resource){
            OUTPUT.push(
                <p key={resource.id}>
                    {resource.title}
                    <br />
                    link <a href={resource.path}>{resource.path}</a>
                </p>
            );
        });

        return (
            <div>
                <Helmet title={pageTitle} />
                <h1>{'Resources'}</h1>
                {OUTPUT}
            </div>
        );

    }

}

Resources.propTypes = {
    resources: PropTypes.array.isRequired
};

export default connectToStores(Resources);
