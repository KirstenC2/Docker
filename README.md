# Docker

This is a docker playground for learning purpose.

Current Projects:
- Apache Airflow
- Apache Spark
- RabbitMQ
- WordPress

## How Docker Works?

https://docs.docker.com/get-started/docker-overview/

Docker is basically providing abundant images and packages in a container environment.

The container provided by docker contains everything needed for initiating the applications. It reduces the workload of engineer on checking the installations and dependencies for specific application.

#### Client-server architecture

The clients of docker will be communicating with Docker Daemon, where they responsible for doing the heavy lifting of building, running, and distributing your Docker containers.


## DockerFile

Reference: https://docs.docker.com/reference/dockerfile/

DockerFile is a program to pack or to say, building an image. The instructions from the DockerFile will tell how the docker should build the whole image. 

DockerFile normally used for: 
- Packaging microservices
- Running Big-data platform
- Isolated dev/test environment
- CI/CD automation