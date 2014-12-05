# hearth

Stupid simple json test data stream generator


## Installation

    npm i -g hearth


## CLI usage

    hearth myconfig.json | json -gai

## Library usage

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
      // m == { "foo" : 3 }
      // m == { "foo" : 1 }
      // m == { "foo" : 4 }
      // ...
    });

    // ... when done
    hearth.end(i);

## Quick Reference

    { "name" : "str1",   "type" : "lipsum",          "min": 2, "max": 3 }
    { "name" : "str2",   "type" : "string",          "value" : "str", "prefix" : true, "suffix" : true }
    { "name" : "str3",   "type" : "randomselection", "options" : [ "one", "two", "three" ] }
    { "name" : "int1",   "type" : "int",             "min" : 0, "max" : 10 }
    { "name" : "float1", "type" : "float",           "min" : 0.1, "max" : 0.5 }
    { "name" : "obj1",   "type" : "object",          "entity" : "entity1" }
    { "name" : "list1",  "type" : "list",            "entity" : "entity1", "count" : 50 }

    // for more concrete examples check out the example-conf folder


## TODO

- root level array support
- emoji / unicode / geo datasets
- read config from stdin stream

