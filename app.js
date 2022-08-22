
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const MongoClient = require('mongodb').MongoClient;

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();


//DB CONNECTION 
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log("Connected to database");
}).catch(() => {
  console.log("Failed to connect to database");
});


// Use parsing middleware
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

// import main route
// import the routes 
const userRoutes = require("./routes/user")

// use routes

app.use("/api", userRoutes) // = localhost/api/signup




const port = process.env.port || 8000;
// Start a server 
app.listen(port, () => {

  console.log(`Server is running on port ${port}`);
})


