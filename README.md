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

## Storage
### What is Volume in Docker?

Volume in Docker is a form of persistent storage mechanism.
- external storage outside the container (simple explanation)


The data of container itself was in lifecycle with the container together. But when the volume is being applied to a Docker, the storage will live as two entities.

#### Use case of Volumes
- You need an easier method to backup or to migrate than only binding mounts.
- Your app in container needs a high-performance I/O
- You need the data to be more safely shared among multiple containers.

### What is bind mounts?

- similar to, you tell the container, "Use the file as the path I provided to you to store everything."

#### Different with Volumes?


*Volumes*: 
- **create** a dir through Docker storage on the host (Docker in charge)


*Bind Mounts*: 
- a directory on the host machine is **mounted** from the host into a container

#### When to use bind mounts?
- **Sharing source code** or build **artifacts** between a development environment on the Docker host and a container.

- When you want to create or generate files in a container and **persist** the files onto the **host's filesystem**.

- **Sharing** configuration files from the host machine to containers. This is how Docker provides DNS resolution to containers by default, by mounting /etc/resolv.conf from the host machine into each container.

### Comparison with Volume

| Feature          | Bind Mount                | Volume                       |
| ---------------- | ------------------------- | ---------------------------- |
| Source           | Host-managed              | Docker-managed               |
| Best For         | Development, live editing | Persistent app/data storage  |
| Portability      | Low (host-specific)       | High (Docker handles it)     |
| Access from host | Yes                       | No (unless manually mounted) |
