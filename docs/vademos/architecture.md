---
sidebar_position: 2
---

# Architecture Overview

VADEMOS is build on a REACT Framework 

## Backend

  Database Prep
Access the MySQL interface in your terminal by running mysql -u root -p
Create a new database called facebook: create database project
Add a .env file to the project folder of this repository containing the MySQL authentication information for MySQL user like this:
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=vademos
  DB_PASS=YOURPASSWORD

.env File:
Stores sensitive information (e.g., database credentials, API keys).
Ensures better security and flexibility across environments.

Helper.js
Purpose: Contains reusable utility functions to support core backend processes.
Key Functions:
Data validation and formatting.
Error handling and logging mechanisms.
Simplified API calls and query structures.

Database.js
Purpose: Manages database connections and operations.
Features:
Encapsulates SQL queries for modularity and reusability.
Ensures reliable connection handling and error mitigation.
Built to support scaling for additional datasets or regions.
Database Testing
EU Database
Testing Tool: DBeaver.
Process:
Connected to the EuFMD database to validate schema integrity and query performance.
Verified CRUD (Create, Read, Update, Delete) operations for accuracy.
Ensured compliance with the application's data requirements and performance standards.
Setup Instructions

- Run `npm run migrate` in the project folder of this repository, in a new terminal window. This will create two tables called 'users' and 'comments' in your database.

- Make sure you understand how the `users` table is constructed. In your MySQL console, you can run `use project;` and then `describe users;` to see the structure of the users table ( the same is about other tables).

### Development

- Run `npm start` in project directory to start the Express server on port 3000
- In another terminal, do `cd client` and run `npm run dev` to start the client in development mode with hot reloading in port 5173.

### Mapbox  installation
npm install mapbox-gl
npm install @mapbox/mapbox-gl-geocoder


### Email feature installation:
npm install --save @emailjs/browser

### React swiper installation:
npm install swiper


## Technologies Used





Prerequisites
Node.js and npm installed.
DBeaver or equivalent database management tool.
Steps
Clone the repository and run npm install to install dependencies.
Configure the .env file with:
Database credentials.
API keys and application-specific settings.
Run the application locally using npm start.
For database testing:
Use DBeaver to connect to the database.
Test queries using the schemas provided in database.js.


* [React](https://reactjs.org/)
* [Mapbox] (https://docs.mapbox.com/)
* [Express]
* [Node.js]
* [Emailjs]
  

## Frontend
Development
Run npm start in project directory to start the Express server on port 3000
In another terminal, do cd client and run npm run dev to start the client in development mode with hot reloading in port 5173.
Dependencies
Run npm install in project directory. This will install server-related dependencies such as express.
cd client and run npm install. This will install client dependencies (React).
Database Prep
Access the MySQL interface in your terminal by running mysql -u root -p
Create a new database called facebook: create database project
Add a .env file to the project folder of this repository containing the MySQL authentication information for MySQL user like this:
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=vademos
  DB_PASS=YOURPASSWORD
Run npm run migrate in the project folder of this repository, in a new terminal window. This will create two tables called 'users' and 'comments' in your database.

Make sure you understand how the users table is constructed. In your MySQL console, you can run use project; and then describe users; to see the structure of the users table ( the same is about other tables).

Development
Run npm start in project directory to start the Express server on port 3000
In another terminal, do cd client and run npm run dev to start the client in development mode with hot reloading in port 5173.