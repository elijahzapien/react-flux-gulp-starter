'use strict';

import alt from '../alt';
import importMedia from '../utils/importMedia';
import LoadDataActions from '../actions/LoadDataActions';
import BreakpointActions from '../actions/BreakpointActions';
import LogoActions from '../actions/LogoActions';

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

        this.logoFocus = false;

        this.bindListeners({
            onLoadDataStart: LoadDataActions.LOAD_DATA_START,
            onLoadDataEnd: LoadDataActions.LOAD_DATA_END,
            onBreakpointUpdate: BreakpointActions.UPDATE_BREAKPOINT,
            onLogoMouseOver: LogoActions.LOGO_MOUSE_OVER,
            onLogoMouseOut: LogoActions.LOGO_MOUSE_OUT
        });

    }

    onLoadDataStart() {
        // do something on load data start
    }

    onLoadDataEnd() {
        // do something on load data end
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
            // needed or else component will rerender on every event dispatch
            return false;
        }

    }

    onLogoMouseOver() {
        this.logoFocus = true;
    }

    onLogoMouseOut() {
        this.logoFocus = false;
    }

}

export default alt.createStore(ApplicationStore, 'ApplicationStore');

