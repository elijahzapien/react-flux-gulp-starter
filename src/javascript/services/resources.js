'use strict';

export default {
    fetch: function() {
        return new Promise(function(resolve, reject) {

            let req = new XMLHttpRequest();
            req.open('GET', '/libs/resources.json');

            req.onload = function() {
                if (req.status === 200) {
                    resolve(JSON.parse(req.response));
                } else {
                    reject(Error(req.statusText));
                }
            };

            req.send();

        });
    }
};

