# Questionnaire-Express
A simple backend to support the Questonnaire React App

The application is built using Express ( A minimalistic NodeJS based backend library).


### server.js
It has two post method handlers to simulate login & sign up.
It also has two get method handlers to simulate user details and question details to the front end application.

### mongoose.js
Mongoose is a Object Data Modeling library for MongoDB and NodeJS.
This file has the initialization of the connection to the MongoDB which is hosted in MongoDB cloud.

### models/user.js
Models folder is for the DB schema details.
It has the user schema which is used to perform database operations using Mongoose.

### questionnaire.js
The sample data given for test


## Running the application locally

  - Clone the repository
  - Run npm install command
  - run node server.js
  ```sh
    cd Questionnaire-Express
    npm install
    node server.js
  ```
  
