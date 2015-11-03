'use strict';

import alt from '../alt';
import ResourcesService from '../services/resources';

/*
 * Load all initial data
 */

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

        this.dispatch();

        this.actions.loadDataStart();

        // counter based on number of
        // fetchData calls being made below
        let counter = 1;

        function onFetchData() {
            if (--counter === 0) {
                this.actions.loadDataEnd();
            }
        }

        // fetch all necessary data here
        fetchData(ResourcesService, this.actions.receiveResources, false, onFetchData.bind(this));

    }

}

export default alt.createActions(LoadDataActions);

