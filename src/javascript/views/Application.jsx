"use strict";

import _ from 'lodash';

import React, {PropTypes, Component} from 'react';

//import ApplicationStore from '../stores/ApplicationStore';

//import breakpointUpdate from '../actions/breakpointUpdate';

import Navigation from './components/Navigation';
import Timestamp from './components/Timestamp';

export default class Application extends Component {

    componentWillMount() {
        //this.onResize();
    }

    componentDidMount() {
        //this.debouncedResize = _.debounce(this.onResize, 100);
        //window.addEventListener('resize', this.debouncedResize.bind(this));
    }

    onResize() {
        //this.context.executeAction(breakpointUpdate);
    }

    render() {

        /*let renderedChildren = React.Children.map(this.props.children, (child) => {*/
            //return React.cloneElement(
                //child, {
                    //breakpoint: this.props.breakpoint
                //}
            //);
        /*});*/

        return (
            <div>
                <nav>
                    <Navigation />
                </nav>
                <main>
                    {/*renderedChildren*/}
                    {this.props.children}
                </main>
                <footer>
                    <Timestamp />
                </footer>
            </div>
        );
    }

}

