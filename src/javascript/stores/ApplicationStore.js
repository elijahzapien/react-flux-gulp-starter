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

        this.state = {
            breakpoint: {
                currentName: currentName,
                currentValue: currentValue,
                previousName: null,
                previousValue: null
            },
            logoFocus: false
        };

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

        let updatedCurrentName = importMedia.getActive(),
            updatedCurrentValue = importMedia.getValue(updatedCurrentName),
            updatedPreviousName = this.state.breakpoint.currentName,
            updatedPreviousValue = this.state.breakpoint.currentValue;

        if (updatedCurrentName === updatedPreviousName) return false;

        this.setState({
            breakpoint: {
                currentName: updatedCurrentName,
                currentValue: updatedCurrentValue,
                previousName: updatedPreviousName,
                previousValue: updatedPreviousValue
            }
        });

    }

    onLogoMouseOver() {
        this.setState({
            logoFocus: true
        });
    }

    onLogoMouseOut() {
        this.setState({
            logoFocus: false
        });
    }

}

export default alt.createStore(ApplicationStore, 'ApplicationStore');

