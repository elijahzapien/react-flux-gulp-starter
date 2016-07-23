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

    static propTypes = {
        resources: PropTypes.array
    }

    render() {
        const pageTitle = 'Resources - React, Flux, Gulp Started';

        return (
            <div>
                <Helmet title={pageTitle} />
                <h1>{'Resources'}</h1>
                {
                    this.props.resources.map(resource => {
                        return (
                            <p key={resource.id}>
                                {resource.title} <br /> link <a href={resource.path}>{resource.path}</a>
                            </p>
                        );
                    })
                }
            </div>
        );
    }

}

export default connectToStores(Resources);
