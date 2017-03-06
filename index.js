/*
  Author Jeffrey Catania <jeffrey.catania@accenture.com>
*/
var jsf = require("json-schema-faker");

module.exports = function(content) {
  this.cacheable && this.cacheable();
  var value = jsf(JSON.parse(content));
  return  JSON.stringify(value, undefined, "\t");
}
