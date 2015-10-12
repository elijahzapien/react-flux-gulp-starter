'use strict';

import alt from '../alt';

class LogoActions {
    constructor() {
        this.generateActions('logoMouseOver');
        this.generateActions('logoMouseOut');
    }
}

export default alt.createActions(LogoActions);

