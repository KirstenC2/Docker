# Containerize Applications

## Step 1: Create Dockerfile (at root dir)
```
# 1. Use an official Node.js image
FROM node:20

# 2. Set working directory
WORKDIR /app

# 3. Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# 4. Copy the rest of the app
COPY . .

# 5. Expose the port your app runs on
EXPOSE 3000

# 6. Start the app
CMD ["node", "app.js"]
```
## Step 2: Build docker image
```
docker build -t application_image .
```
## Step 3: Run the container

```
docker run -d -p 3000:3000 --name application_container application_image

```

- Container's Name: application_container
- Container's Image: image name you used to build in step 2

# Multiservice Containerization

[Node.js + MongoDB in one](./multiservice_Container.yml)


