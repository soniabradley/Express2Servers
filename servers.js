// Here we require/import the HTTP module
// An HTTP module is an assembly that is called on every request that is made to your application. 
// HTTP modules are called as part of the ASP.NET request pipeline and have access to life-cycle events throughout the request. 
// HTTP modules let you examine incoming and outgoing requests and take action based on the request.
var http = require("http");

var PORTONE = 7000;
var PORTTWO = 7500;

function handleRequestOne(request, response) {
  response.end("Its a Beautiful World: " + request.url);
}

function handleRequestTwo(request, response) {
  response.end("It is Hell On Earth: " + request.url);
}

var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

serverOne.listen(PORTONE, function () {
  console.log("Server listening on: http://localhost:%s", PORTONE);
});

serverTwo.listen(PORTTWO, function () {
  console.log("Server listening on: http://localhost:%s", PORTTWO);
});