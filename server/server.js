/* This This code sets up an Express server that listens on port 8000 or the port specified in the environment variable. It uses the dotenv package to load environment variables from a .env file. It also uses the cors package to enable Cross-Origin Resource Sharing. The server is connected to a database using the connectDB function and uses a model to interact with the database. The server has a router that handles incoming requests. The server responds to requests with JSON data and uses the express.json() middleware to parse incoming JSON data. The server is started by calling the listen() method on the app object.*/

const express = require("express");
require("dotenv").config();
const cors = require("cors");

const connectDB = require("./connection");
const model = require("./model/model");
const router = require("./router/router");

const app = express();
const PORT = 8000 || process.env.port;

app.use(express.json());
app.use(cors());

// app.use(function (req, res, next) {
//   // Website you wish to allow to connect
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:8888");

//   // Request methods you wish to allow
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );

//   // Request headers you wish to allow
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "X-Requested-With,content-type"
//   );

//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader("Access-Control-Allow-Credentials", true);

//   // Pass to next layer of middleware
//   next();
// });

app.use("/", router, (req, res) => {
  res.send('WeLcOmE to the server home page')
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
