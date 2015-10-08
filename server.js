'use strict';

var express = require('express');
var expressState = require('express-state');
var debug = require('debug')('Server');
var server = express();

expressState.extend(server);

server.use(express.static(__dirname + '/build'));

var port = process.env.PORT || 3000;
server.listen(port);

debug('Listening on port ' + port);

