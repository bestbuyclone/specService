//spec mongo
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/specs", { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", function(err) {
  console.log("mongoose connection error", err);
});

db.once("open", function() {
  console.log("Successful DB connection");
});

const specSchema = mongoose.Schema({
  color: String,
  waterRes: String,
  disType: String,
  appComp: String,
  series: String,
  gps: String,
  dataPlan: String,
  model: String,
  processer: String,
  music: String,
  rechargeable: String,
  battType: String,
  battStrength: String,
  height: String,
  width: String,
  length: String,
  weight: String,
  bbyWarranty: String,
  warrantyLabor: String,
  warrantyParts: String,
  name: String,
  brand: String,
  upc: String
});
const specs = mongoose.model("specs", specSchema);
