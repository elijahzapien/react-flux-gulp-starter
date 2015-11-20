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

        if (
            (this.state.breakpoint.currentName === null) ||
            (importMedia.getActive() !== this.state.breakpoint.currentName)
        ){

            let currentName = importMedia.getActive(),
                currentValue = importMedia.getValue(currentName),
                previousName = this.state.breakpoint.currentName,
                previousValue = this.state.breakpoint.currentValue;

            this.setState({
                breakpoint: {
                    currentName: currentName,
                    currentValue: currentValue,
                    previousName: previousName,
                    previousValue: previousValue
                }
            });

        } else {
            // needed or else component will rerender on every event dispatch
            return false;
        }

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

