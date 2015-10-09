'use strict';

import alt from '../alt';

class BreakpointActions {
    constructor() {
        this.generateActions('breakpointUpdate');
    }
}

export default alt.createActions(BreakpointActions);
