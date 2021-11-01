## Installation Steps
In order to setup the project:
- Download the repository content and place it under a project directory called "node-js"
- Access the node-js directory and run the following command
 ```npm Install```
- Access the node-js/client directory and run the command 
 ```npm start```
- The client is now accessible over localhost:3000
- run "node server.js" under the node-js directory
- The server is accessible over localhost:3001


## Dockers
In order to create a docker image for the client:
- Access the directory under node-js/client
- Execute the followng command 
```docker build -f Dockerfile -t client .``` 
in orderto create a docker image for the client.
- Execute the docker by the command to run the client docker
- ```docker run -it -p 4001:3000 client```
- Access the directory under node-js
- Execute the followng command "docker build -f Dockerfile -t server ." to create a docker image for the server.
```docker build -f Dockerfile -t server .```
- Execute the following command to run the server docker
``` odocker run -it -p 4002:3001 server
