## Installation Steps
1- Download the repository content and place it under a project directory called "node-js"
2- Access the node-js directory and run "npm Install" commant
3- Access the node-js/client directory and run the command "npm start"
4- The client is now accessible over localhost:3000
5- run "node server.js" under the node-js directory
6- The server is accessible over localhost:3001


## Dockers
In order to create a docker image for the client
1- Access the directory under node-js/client
2- Execute the followng command "docker build -f Dockerfile -t client ." to create a docker image for the client.
3- Execute the docker by the command "docker run -it -p 4001:3000 client"
4- Access the directory under node-js
5- Execute the followng command "docker build -f Dockerfile -t server ." to create a docker image for the server.
6- Execute the following command todocker run -it -p 4002:3001 server

