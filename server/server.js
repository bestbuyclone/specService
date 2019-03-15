const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const mongo = require("../database/index.js");

const port = process.env.PORT || 3002;
app.use(express.static("dist"));
app.use(
  bodyParser.json({
    strict: false
  })
);

app.get("/initial", (req, res) => {
  mongo.retrieve(1, (err, results) => {
    if (err) {
      console.log("error in initial get");
    } else {
      console.log("successful initial get");
      console.log(results);
      res.send(results);
    }
  });
});
app.listen(port, () => {
  console.log(`Specs microservice server active on port ${port}`);
});
