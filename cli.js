#!/usr/bin/env node

/*global require, process  */

(function () {
  'use strict';

  var
    path = require('path'),
    factory = require('./factory')
  ;

  var config = require(path.resolve(process.argv[2]));

  factory.begin(config, function (m) {
    process.stdout.write(JSON.stringify(m) + '\n');
  });

}());
