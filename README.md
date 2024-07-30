# Per Scholas Software Engineering Capstone Project

# Description
This project aims to create a full-stack web application using MongoDB, Express, React, and Node (MERN).

The backend of the capstone project allows the web application to have create, read, update, and delete 
(CRUD) functionality. Routes help direct which CRUD operation can be performed depending on the accessed 
URL and HTTP method. For example, a new user can be created when a POST method of request is recieved in 
the /users/signup path.

Files are organized using the Models-Views-Controllers pattern. In this case, the Models directory holds all 
the mongoose schema files. The Controllers directory holds all CRUD operations. In the routes directory, 
holds all files that involve routing. Finally, the validators directory holds all files that handle validations.

# Technical Stack
Database: MongoDB

Validation: Express-Validator

Authorization: jsonwebtoken

Encryption: bcryptjs
