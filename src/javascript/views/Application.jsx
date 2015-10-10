'use strict';

import _ from 'lodash';

import React, { Component, PropTypes } from 'react';

import connectToStores from 'alt/utils/connectToStores';

import ApplicationStore from '../stores/ApplicationStore';
import LoadDataActions from '../actions/LoadDataActions';
import BreakpointActions from '../actions/BreakpointActions';

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
    }

    componentDidMount() {
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

        let children = React.Children.map(this.props.children, (child) => {
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
                    {children}
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
