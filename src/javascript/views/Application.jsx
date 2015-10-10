'use strict';

import _ from 'lodash';

import React, { Component, PropTypes } from 'react';
import connectToStores from 'alt/utils/connectToStores';

import ApplicationStore from '../stores/ApplicationStore';
import BreakpointActions from '../actions/BreakpointActions';
import LoadDataActions from '../actions/LoadDataActions';

import Navigation from './components/Navigation';
import Timestamp from './components/Timestamp';
import BreakpointTracker from './components/BreakpointTracker';

class Application extends Component {

    static getStores() {
        return [ApplicationStore];
    }

    static getPropsFromStores() {
        return ApplicationStore.getState();
    }

    componentWillMount() {
        LoadDataActions.loadData();
        this.onResize();
    }

    componentDidMount() {
        this.onResize();
        this.debouncedResize = _.debounce(this.onResize, 100);
        window.addEventListener('resize', this.debouncedResize.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener(this.debouncedResize);
    }

    onResize() {
        BreakpointActions.updateBreakpoint();
    }

    render() {

        let renderedChildren = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(
                child, {
                    breakpoint: this.props.breakpoint
                }
            );
        });

        return (
            <div>
                <nav>
                    <Navigation />
                </nav>
                <main>
                    {renderedChildren}
                    {/*this.props.children*/}
                </main>
                <footer>
                    <Timestamp />
                    <BreakpointTracker breakpoint={this.props.breakpoint}/>
                </footer>
            </div>
        );
    }

}

Application.propTypes = {
    breakpoint: PropTypes.object.isRequired
};

Application = connectToStores(Application);

export default Application;
