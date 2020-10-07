// GENERATED CODE -- DO NOT EDIT!

// package: helloworld
// file: helloworld/service.proto

import * as helloworld_service_pb from "../helloworld/service_pb";
import * as grpc from "grpc";

interface IHelloWorldServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  helloWorld: grpc.MethodDefinition<helloworld_service_pb.Request, helloworld_service_pb.Response>;
}

export const HelloWorldServiceService: IHelloWorldServiceService;

export class HelloWorldServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  helloWorld(argument: helloworld_service_pb.Request, callback: grpc.requestCallback<helloworld_service_pb.Response>): grpc.ClientUnaryCall;
  helloWorld(argument: helloworld_service_pb.Request, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<helloworld_service_pb.Response>): grpc.ClientUnaryCall;
  helloWorld(argument: helloworld_service_pb.Request, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<helloworld_service_pb.Response>): grpc.ClientUnaryCall;
}
