# Task Manager App

## Project Organization
`server/` folder contains all the backend related files. Runs in port 8000.
`frontend-react/` contains the front end version built using react and redux for state management. Runs in port 3000.
`frontend-vuex/` contains the front end version built using vue and vuex for state management. Runs in port 8080.

## Before Starting
1. git clone https://github.com/alelr36/techifide.git
2. cd techifide
3. npm install
4. cd frontend-react / frontend-vuex
5. npm install
6. Fill the file `nodemon.json` in the **root of the project**, using the credentials provided by email.
7. Before starting any of the subprojects it's important to run npm install, for root project (server), and for frontend projects detailed above.

----
After the comands above have been run, you can start the server by running
`npm start` in root folder. This will start the server using 8000 port. Visiting http://localhost:8000 should show you a hello world message.

The react front end can be started by running `npm start` in the _frontend-react_ folder. Visiting http://localhost:3000 should be possible then.

The vue front end can be started by running `npm run serve` in the _frontend-vuex_ folder. Visiting http://localhost:8080 should be possible then.

----

MySQL database is hosted in a _MySQL as a service_ platform. Access data should be provided by email.

## Other commands
`npm run test`

This command can be run at the **root of the project** to execute backend tests, or **inside frontend-react folder** to run frontend tests.