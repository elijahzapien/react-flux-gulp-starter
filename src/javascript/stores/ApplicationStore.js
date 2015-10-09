'use strict';

import alt from '../alt';
import importMedia from '../utils/importMedia';
import BreakpointActions from '../actions/BreakpointActions';

class ApplicationStore {

    constructor() {
        let currentName = importMedia.getActive(),
            currentValue = importMedia.getValue(currentName);

        this.breakpoint = {
            currentName: currentName,
            currentValue: currentValue,
            previousName: null,
            previousValue: null
        };

        this.bindListeners({
            onBreakpointUpdate: BreakpointActions.UPDATE_BREAKPOINT
        });

    }

    onBreakpointUpdate() {

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

        } else {
            // needed or else component will rerender on every event dispatch (booty)
            // hopefully will be fixed in next version
            return false;
        }

    }

    onLoadDataStart() {
        // do something on load data start
    }

    onLoadDataEnd() {
        // do something on load data end
    }

}

export default alt.createStore(ApplicationStore, 'ApplicationStore');

