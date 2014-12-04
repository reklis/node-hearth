# hearth

Stupid simple json test data stream generator


## Installation and Usage

    npm i -g hearth

    hearth myconfig.json

## Quick Reference

    { "name" : "str1",   "type" : "lipsum", "min": 2, "max": 3 }
    { "name" : "str2",   "type" : "string", "value" : "str", "prefix" : true, "suffix" : true }
    { "name" : "opt1",   "type" : "randomselection", "options" : [ "one", "two", "three" ] }
    { "name" : "int1",   "type" : "int", "min" : 0, "max" : 10 }
    { "name" : "float1", "type" : "float", "min" : 0.1, "max" : 0.5 }
    { "name" : "obj1",   "type" : "object", "entity" : "entity1" }
    { "name" : "lb",     "type" : "list", "entity" : "entity1", "count" : 50 }

    // for more concrete examples check out the example-conf folder


## TODO

- root level array support
- emoji / unicode / geo datasets
- read config from stdin stream
