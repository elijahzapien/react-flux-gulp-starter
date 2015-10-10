'use strict';

import alt from '../alt';
import ResourcesService from '../services/resources';

function fetchData (service, successAction, failAction, done) {

    service.fetch()
    .then((data) => {
        successAction(data);
        done();
    })
    .catch((err) => {
        if (failAction) failAction(err);
        done();
    });

}

class LoadDataActions {

    constructor() {
        this.generateActions(
            'loadDataStart',
            'loadDataEnd',
            'receiveResources'
        );
    }

    loadData() {

        this.actions.loadDataStart();

        let counter = 1;

        function onFetchData() {
            if (--counter === 0) {
                this.actions.loadDataEnd();
            }
        }

        fetchData(ResourcesService, this.actions.receiveResources, false, onFetchData.bind(this));

    }

}

export default alt.createActions(LoadDataActions);
