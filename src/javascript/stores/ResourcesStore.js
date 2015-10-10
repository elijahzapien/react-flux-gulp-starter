'use strict';

import alt from '../alt';
import LoadDataActions from '../actions/LoadDataActions';

class ResourcesStore {

    constructor() {
        this.resources = [];

        this.bindListeners({
            onReceiveResources: LoadDataActions.RECEIVE_RESOURCES
        });
    }

    onReceiveResources(data) {
        this.resources = data;
    }

}

export default alt.createStore(ResourcesStore, 'ResourcesStore');

