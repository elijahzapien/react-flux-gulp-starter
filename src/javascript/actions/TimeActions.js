'use strict';

import alt from '../alt';

class TimeActions {
    constructor() {
        this.generateActions('updateTime');
    }
}

export default alt.createActions(TimeActions);

