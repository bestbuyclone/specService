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
  id: Number,
  color: String,
  waterRes: String,
  disType: String,
  appComp: String,
  series: String,
  gps: String,
  dataPlan: String,
  model: String,
  processor: String,
  music: String,
  rechargeable: String,
  battType: String,
  battStrength: String,
  height: String,
  width: String,
  len: String,
  weight: String,
  bbyWarranty: String,
  warrantyLabor: String,
  warrantyParts: String,
  name: String,
  brand: String,
  upc: String
});
const Spec = mongoose.model("Spec", specSchema);

const save = (info, cb) => {
  console.log("hit save func");
  let spec = new Spec({
    id: info.id,
    color: info.color,
    waterRes: info.waterRes,
    disType: info.disType,
    appComp: info.appComp,
    series: info.series,
    gps: info.gps,
    dataPlan: info.dataPlan,
    model: info.model,
    processor: info.processor,
    music: info.music,
    rechargeable: info.rechargeable,
    battType: info.battType,
    battStrength: info.battStrength,
    height: info.height,
    width: info.width,
    len: info.len,
    weight: info.weight,
    bbyWarranty: info.bbyWarranty,
    warrantyLabor: info.warrantyLabor,
    warrantyParts: info.warrantyParts,
    name: info.name,
    brand: info.brand,
    upc: info.upc
  });
  spec
    .save()
    .then(data => {
      cb(null, data);
    })
    .catch(err => {
      cb(err);
    });
};
const retrieve = (id, cb) => {
  console.log("you've hit the retrieve handler");
  Spec.findOne({ id: id }, (err, res) => {
    if (err) {
      console.log("error in retrieve");
    } else {
      console.log(res, "res from db retrieve");
      cb(null, res);
    }
  });
};

module.exports = { save, retrieve };
