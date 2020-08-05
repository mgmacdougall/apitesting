# Apitesting

Example API integration testing application, for testing CRUD operations with PostMan.

## Using the following:

1. Mongodb - persistence
2. Express - api server
3. API tests - newman + api test driver

## To set up project:

1. Run npm install - to install all the dependencies
2. Make sure an instance of Mongo DB is running, if not start up Mongo by running mongod from the command line.
3. If this is a new installation, and no data exists, run the seed steps.
   a. Navigate to the 'seedData' directory off the root of the project
   b. Run the following command `mongo liftingAPI < dataJSON.js`
   c. Launch the Mongo DB Client, or from the mongo shell, and check that there are 6 records in the collection.
4. There are two options to run the server:
   a. For development mode run `npm run start-dev` to run in development mode
   b. For production run `npm start` to start the entire server

# To Run the API tests

There is one set of Post Man api tests that exist.
To run these use the following commnd `npm run contract-tests`.
The results will display in console. Any failures will be in red, green is pass.
