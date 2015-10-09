'use strict';

import React, {Component} from 'react';
import Helmet from 'react-helmet';

//import ResourcesStore from '../../stores/ResourcesStore';

export default class Resources extends Component {

    render() {

        let pageTitle = 'Resources - React, Flux, Gulp Started';

        //let resources = this.props.resources;
        //let OUTPUT = [];

        /*resources.map(function(resource){*/
            //OUTPUT.push(
                //<p>
                    //{`name: ${resource.title}. `}
                    //{'link: '}<a href={resource.path}>{resource.path}</a>
                //</p>
            //);
        /*});*/

        return (
            <div>
                <Helmet title={pageTitle} />
                <h1>{'Resources'}</h1>
                <p>{/*OUTPUT*/}</p>
            </div>
        );

    }

}
