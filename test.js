/*global require, exports */

var hearth = require('./factory');

exports.test1 = function (test) {

  'use strict';

  var i, config;

  config = {
    interval: 1,
    schema : [
      {
        name : 'foo',
        type : 'int',
        min  : 1,
        max  : 10
      }
    ]
  };

  i = hearth.begin(config, function (m) {
    test.ok(null !== m);
    test.ok(undefined !== m.foo);

    hearth.end(i);

    test.done();
  });

};