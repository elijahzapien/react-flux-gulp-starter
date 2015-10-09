'use strict';

import alt from '../alt';
import TimeActions from '../actions/TimeActions';

class TimeStore {

    constructor() {
        this.time = new Date();

        this.bindListeners({
            onTimeUpdate: TimeActions.UPDATE_TIME
        });
    }

    onTimeUpdate(payload) {
        this.time = new Date();
        this.emitChange();
    }

}

export default alt.createStore(TimeStore, 'TimeStore');

