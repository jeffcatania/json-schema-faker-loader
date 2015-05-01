/*
  Copyright 2015 Accenture 
  Author Jeffrey Catania <jeffrey.catania@accenture.com>
*/
var jsf = require("json-schema-faker");

module.exports = function(content) {
  this.cacheable && this.cacheable();
  var value = jsf(JSON.parse(content));
  return "module.exports = " + JSON.stringify(value, undefined, "\t");
}