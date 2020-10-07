package main

import (
	"context"
	"fmt"
	"log"
	"net"

	helloworld "github.com/rohan-luthra/service-helloworld-go/helloworld"
	"google.golang.org/grpc"
)

type server struct {
}

func (*server) HelloWorld(ctx context.Context, request *helloworld.Request) (*helloworld.Response, error) {
	response := &helloworld.Response{
		Messsage: "hello world from go grpc",
	}
	return response, nil
}

func main() {
	address := "0.0.0.0:50051"
	lis, err := net.Listen("tcp", address)
	if err != nil {
		log.Fatalf("Error %v", err)
	}
	fmt.Printf("Server is listening on %v ...", address)

	s := grpc.NewServer()
	helloworld.RegisterHelloWorldServiceServer(s, &server{})

	s.Serve(lis)
}
