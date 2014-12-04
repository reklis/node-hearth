#!/usr/bin/env node

/*global require, process, setInterval */

(function () {
  'use strict';

  var
    path = require('path'),
    lipsumdata = require('./lipsum.json')
  ;

  function between (min, max) {
    if (min > max) {
      var temp = min;
      min = max;
      max = temp;
    }

    return Math.random() * (max - min + 1) + min;
  }

  function makeobj (entity_desc, entity_list, entity_index) {
    var m = {};

    entity_desc.forEach(function (field) {

      if ('string' === field.type) {
        m[field.name] = makestring(field.value, field.prefix, field.suffix, entity_index);
      } else if ('int' === field.type) {
        m[field.name] = Math.floor(between(field.min, field.max));
      } else if ('float' === field.type) {
        m[field.name] = between(field.min, field.max);
      } else if ('object' === field.type) {
        m[field.name] = makeobj(entity_list[field.entity], entity_list);
      } else if ('list' === field.type) {
        m[field.name] = makelist(entity_list[field.entity], entity_list, field.count);
      } else if ('randomselection' === field.type) {
        m[field.name] = selectrandom(field.options);
      } else if ('lipsum' === field.type) {
        m[field.name] = lipsum(field.min, field.max);
      }

    });

    return m;
  }

  function makelist (entity_desc, entity_list, count) {
    var instances = [];

    while
      (count > instances.push(
        makeobj(entity_desc, entity_list, instances.length)
      )
    ) {
        continue;
    }

    return instances;
  }

  function makestring (value, prefix, suffix, index) {
    var s = value || '';

    if (prefix) {
      if (prefix.index) {
        s = (index || 0) + s;
      } else {
        s = ~~(between(prefix.begin || 0, prefix.end || 100)) + s;
      }
    }

    if (suffix) {
      if (suffix.index) {
        s += index || 0;
      } else {
        s += ~~(between(suffix.begin || 0, suffix.end || 100));
      }
    }

    return s;
  }

  function lipsum (min, max) {
    var
      i = ~~(between(0, lipsumdata.length-1)),
      n = ~~(between(min || 8, max || 16)),
      j = i + n
    ;

    return lipsumdata.slice(i, j).join(' ');
  }

  function selectrandom (options) {
    var i = ~~(between(0, options.length-1));
    return options[i];
  }

  function main () {

    var config = require(path.resolve(process.argv[2]));

    setInterval(function () {
      var m = makeobj(config.schema, config.entities);

      process.stdout.write(JSON.stringify(m) + '\n');

    }, config.interval);

  }

  main();

}());
