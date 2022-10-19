require("dotenv").config();

const express = require("express");

const cors = require("cors");

const body_parser = require("body-parser");

const morgan = require("morgan");

// const jwt = require("./middleware/jwt");

const app = express();

app.use(morgan("combined"));

app.use(
  cors({
    origin: "*",
  })
);

const port = process.env.EXPRESS_PORT;

app.use(body_parser.json({ limit: "100mb" }));



app.listen(port, () => {
  console.log(`Express server listening on ${port}`);
});
