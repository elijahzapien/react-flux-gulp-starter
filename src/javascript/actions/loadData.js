'use strict';

import ResourcesStore from '../stores/ResourcesStore';

function fetchData (context, store, service, action, done) {
    if (store.getAll().length === 0) {
        context.service.read(service, {}, {}, (err, data) => {
            context.dispatch(action, data);
            done();
        });
    } else {
        done();
    }
}

export default function loadData (context, payload, done) {

    context.dispatch('LOAD_DATA_START');

    let resourcesStore = context.getStore(ResourcesStore);

    let counter = 1;

    function onFetchData () {
        if (--counter === 0) {
            context.dispatch('LOAD_DATA_END');
            done();
        }
    }

    fetchData(context, resourcesStore, 'resources', 'RECEIVE_RESOURCES', onFetchData);

}
