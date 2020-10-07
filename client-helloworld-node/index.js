var helloword = require('./helloworld/service_pb');
var services = require('./helloworld/service_grpc_pb');

var grpc = require('grpc');

function main() {
  var client = new services.HelloWorldServiceClient('localhost:50051',
                                          grpc.credentials.createInsecure());
  var request = new helloword.Request();
  var user;
  if (process.argv.length >= 3) {
    user = process.argv[2];
  } else {
    user = 'world';
  }
  client.helloWorld(request, function(err, response) {
      if(err) console.log('Node Client Error:', err)
      else console.log('Node Client Message:', response.getMesssage());
  });
}
  
main();   