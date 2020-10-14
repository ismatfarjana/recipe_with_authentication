// Pull in our required dependencies (namely express, mongoose and bodyParser)
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
// Initialize our app using express()
const app = express();
// Bodyparser middleware
// Apply the middleware function for bodyparser so we can use it
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Pull in our MongoURI from our keys.js file and connect to our MongoDB database
const port = process.env.PORT || 6000;

// DB Config
const db = process.env.ALTAS_URI;
// Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Set the port for our server to run on and have our app listen on this port
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
