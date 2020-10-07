// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// service.proto
//
'use strict';
var grpc = require('grpc');
var helloworld_service_pb = require('../helloworld/service_pb.js');

function serialize_helloworld_Request(arg) {
  if (!(arg instanceof helloworld_service_pb.Request)) {
    throw new Error('Expected argument of type helloworld.Request');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_helloworld_Request(buffer_arg) {
  return helloworld_service_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_helloworld_Response(arg) {
  if (!(arg instanceof helloworld_service_pb.Response)) {
    throw new Error('Expected argument of type helloworld.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_helloworld_Response(buffer_arg) {
  return helloworld_service_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


// simple HelloWorldService
var HelloWorldServiceService = exports.HelloWorldServiceService = {
  // rpc method accepts nothing and returns a string
  helloWorld: {
    path: '/helloworld.HelloWorldService/HelloWorld',
    requestStream: false,
    responseStream: false,
    requestType: helloworld_service_pb.Request,
    responseType: helloworld_service_pb.Response,
    requestSerialize: serialize_helloworld_Request,
    requestDeserialize: deserialize_helloworld_Request,
    responseSerialize: serialize_helloworld_Response,
    responseDeserialize: deserialize_helloworld_Response,
  },
};

exports.HelloWorldServiceClient = grpc.makeGenericClientConstructor(HelloWorldServiceService);
