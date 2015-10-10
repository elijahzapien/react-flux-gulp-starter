'use strict';

var express = require('express');
var expressState = require('express-state');
var path = require('path');
var debug = require('debug')('Server');
var server = express();

expressState.extend(server);

server.use(express.static(__dirname + '/build'));

/*
 * reference
 * https://github.com/rackt/react-router/blob/master/docs/guides/basics/Histories.md#configuring-your-server
 */
server.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'build', 'index.html'))
});

var port = process.env.PORT || 3000;
server.listen(port);

debug('Listening on port ' + port);

