import _ from 'lodash';

import React, { Component, PropTypes } from 'react';

import connectToStores from 'alt-utils/lib/connectToStores';

import ApplicationStore from '../stores/ApplicationStore';
import LoadDataActions from '../actions/LoadDataActions';
import BreakpointActions from '../actions/BreakpointActions';

import Navigation from './components/Navigation';
import Logo from './components/Logo';
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
            <div className={this.props.logoFocus ? 'rage' : null}>
                <aside>
                    <nav>
                        <Navigation history={this.props.history}/>
                    </nav>
                    <section>
                        <Logo />
                        <Timestamp />
                        <BreakpointTracker />
                    </section>
                </aside>
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }

}

Application.propTypes = {
    history: PropTypes.any,
    children: PropTypes.any,
    breakpoint: PropTypes.object,
    logoFocus: PropTypes.bool
};

Application.childContextTypes = {
    breakpoint: PropTypes.object.isRequired
};

export default connectToStores(Application);
