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

    getChildContext() {
        return {
            breakpoint: this.props.breakpoint
        };
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
        return (
            <div>
                <nav>
                    <Navigation history={this.props.history}/>
                </nav>
                <main>
                    {this.props.children}
                </main>
                <footer>
                    <Timestamp />
                    <BreakpointTracker />
                </footer>
            </div>
        );
    }

}

Application.propTypes = {
    breakpoint: PropTypes.object.isRequired
};

Application.childContextTypes = {
    breakpoint: PropTypes.object.isRequired
};

Application = connectToStores(Application);

export default Application;
