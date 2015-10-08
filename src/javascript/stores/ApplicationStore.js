
'use strict';

import BaseStore from 'fluxible/addons/BaseStore';
import {PropTypes} from 'react';

class ApplicationStore extends BaseStore {

    constructor(dispatcher) {
        super(dispatcher);
        this.currentRoute = null;
        this.breakpoint = {
            currentName: null,
            currentValue: null,
            previousName: null,
            previousValue: null
        };
    }

    onBreakpointUpdate() {

        let importMedia = this.getContext().importMedia;

        if (
            (this.breakpoint.currentName === null) ||
            (importMedia.getActive() !== this.breakpoint.currentName)
        ){

            let currentName = importMedia.getActive(),
                currentValue = importMedia.getValue(currentName),
                previousName = this.breakpoint.currentName,
                previousValue = this.breakpoint.currentValue;

            this.breakpoint = {
                currentName: currentName,
                currentValue: currentValue,
                previousName: previousName,
                previousValue: previousValue
            };

            this.emitChange();

        }

    }

    onLoadDataStart() {
        // do something on load data start
    }

    onLoadDataEnd() {
        // do something on load data end
    }

    onChangeRoute(route) {
        if (this.currentRoute && route.pathname === this.currentRoute.pathname) {
            return;
        }
        this.currentRoute = route;
        this.emitChange();
    }

    getState() {
        return {
            route: this.currentRoute,
            breakpoint: this.breakpoint
        };
    }

    dehydrate() {
        return this.getState();
    }

    rehydrate(state) {
        this.currentRoute = state.route;
        this.breakpoint = state.breakpoint;
    }

}

ApplicationStore.storeName = 'ApplicationStore';

ApplicationStore.contextTypes = {
    importMedia: PropTypes.object.isRequired
};

ApplicationStore.handlers = {
    'LOAD_DATA_START': 'onLoadDataStart',
    'LOAD_DATA_END': 'onLoadDataEnd',
    'CHANGE_ROUTE': 'onChangeRoute',
    'BREAKPOINT_UPDATE': 'onBreakpointUpdate'
};

export default ApplicationStore;
