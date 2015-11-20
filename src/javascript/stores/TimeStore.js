'use strict';

import alt from '../alt';
import TimeActions from '../actions/TimeActions';

class TimeStore {

    constructor() {
        this.state = {
            time: new Date()
        };

        this.bindListeners({
            onTimeUpdate: TimeActions.UPDATE_TIME
        });
    }

    onTimeUpdate(payload) {
        this.setState({
            time: new Date()
        });
    }

}

export default alt.createStore(TimeStore, 'TimeStore');

