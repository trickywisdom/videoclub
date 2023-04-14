const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./connection");
const model = require("./model/model");
const router = require("./router/router");

dotenv.config();

const app = express();
const PORT = 8000 || process.env.port;

app.use(express.json());
app.use(cors());

// connectDB;
// model;
// router;

app.use("/", router);

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
