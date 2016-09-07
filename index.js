var app = {};

//include http
var http = require('http');
var route = require('routing');
var modules = require('module-manager');
/**
 * initialize app
 */
app.initialize = function() {
  var $ = modules.load(process.cwd()+"/etc/modules.json");
  //console.log($.length);
}

//load function. Load the app at defined port
/**
 * load function
 * @param port
 */
app.load = function(port){
  // Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(route.navigate);
server.listen(port || 9000);
}

module.exports = app;
