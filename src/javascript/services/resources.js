'use strict';

import fs from 'fs';

export default {

    name: 'resources',

    read: function(req, resource, params, config, callback) {
        fs.readFile(__dirname + '/../../libs/resources.json', { encoding: 'utf8' }, function (err, data) {
            if (err) {
                callback(err, null);
                return;
            }
            try {
                callback(null, JSON.parse(data));
            }
            catch (err) {
                callback(err, null);
            }
        });
    }

    // other methods
    // create: function(req, resource, params, body, config, callback) {}
    // update: function(req, resource, params, body, config, callback) {}
    // delete: function(req, resource, params, config, callback) {}

};
