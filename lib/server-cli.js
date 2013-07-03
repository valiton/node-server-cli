/*
 * server-cli
 * https://github.com/valiton/node-server-cli
 *
 * Copyright (c) 2013 Valiton GmbH
 * Author Bastian "hereandnow" Behrens
 * Licensed under the MIT license.
 */

'use strict';

var nodeStatic = require('node-static'),
    http = require('http'),
    util = require('util'),
    argv = require('optimist').argv;
    require('colors');

exports= (function() {

  var file = new(nodeStatic.Server)('./'),
      port = argv.port || argv.p || 8080;

  http.createServer(function (request, response) {
    request.addListener('end', function () {
      file.serve(request, response);
    }).resume();
  }).listen(port);

  console.log(util.format('Starting local Server on http://localhost:%d'.green, port));

})();



