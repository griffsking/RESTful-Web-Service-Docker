This microservice application recieves URL requests to a JSON file based database and then returns data from specific service endpoints using GET routes.

How to run:
1. Download and unzip the "assignment5" folder.
2. Open the "assignment5 folder in Visual Studio Code
3. Open a new terminal and run: "docker build -t assignment5-griffinking ."
4. Then run: "docker run -dp 3000:3000 assignment5-griffinking". (You can change the port number in server.js)* You should now see the container running in the Docker Desktop application.
5. Enter "http://localhost:3000/students" (or whatever port you're using) into the browser URL bar and it should bring up a JSON database

*If you're gonna change the port number, use VSCode's search and replace function. It's right under Explorer in the side panel.
