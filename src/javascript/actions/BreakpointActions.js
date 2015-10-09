'use strict';

import alt from '../alt';

class BreakpointActions {
    constructor() {
        this.generateActions('updateBreakpoint');
    }
}

export default alt.createActions(BreakpointActions);
