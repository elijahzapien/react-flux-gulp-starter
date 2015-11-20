'use strict';

import alt from '../alt';
import LoadDataActions from '../actions/LoadDataActions';

class ResourcesStore {

    constructor() {
        this.state = {
            resources: []
        };

        this.bindListeners({
            onReceiveResources: LoadDataActions.RECEIVE_RESOURCES
        });
    }

    onReceiveResources(data) {
        this.setState({
            resources: data
        });
    }

}

export default alt.createStore(ResourcesStore, 'ResourcesStore');

