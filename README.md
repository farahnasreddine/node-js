## Installation Steps
In order to setup the project:
- Download the repository content and place it under a project directory called "node-js"
- Access the node-js directory and run the following command
 ```npm init```
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
 ```docker run -it -p 4001:3000 client```
- Access the directory under node-js
- Execute the followng command to create a docker image for the server
```docker build -f Dockerfile -t server .```
- Execute the following command to run the server docker
``` odocker run -it -p 4002:3001 server```

**You can download the docker images of each of the client and server applications under the following docker hub repositories:**
- https://hub.docker.com/repository/docker/farahprojects/server
- https://hub.docker.com/repository/docker/farahprojects/client


## Description 

***Backend***

The application is a simple project that reads from a JSON file a list of contact details and return the ones within a geographical range based on their location coordinates (lat, lng).
The application runs on a nodejs server. It provides a GET API that expects the range of search as a parameter:
```http://localhost:3001/partners?range=3```
The backend utilizes the npm package to calculate the distance between 2 geographical coordinates.
Express is the used back end web application framework.

***Frontend - UI***

The frontend is a simple UI built in React. I provide the ability to query for the contacts by filling up a form and displaying the results in a table along with the contact details and the list of all contact's location.
The frontend page is reachable under http://localhost:3000/


