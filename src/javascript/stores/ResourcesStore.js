'use strict';

import BaseStore from 'fluxible/addons/BaseStore';

class ResourcesStore extends BaseStore {

    constructor(dispatcher) {
        super(dispatcher);
        this.resources = [];
    }

    onReceiveResources(resources) {
        this.resources = resources || [];
        this.emitChange();
    }

    getAll() {
        return this.resources;
    }

    dehydrate() {
        return {
            resources: this.resources
        };
    }

    rehydrate(state) {
        this.resources = state.resources;
    }

}

ResourcesStore.storeName = 'ResourcesStore';
ResourcesStore.handlers = {
    'RECEIVE_RESOURCES': 'onReceiveResources'
};

export default ResourcesStore;
