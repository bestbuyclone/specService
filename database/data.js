const faker = require("faker");
const db = require("./index.js");
const data = [
  {
    id: 1,
    color: "Khaki",
    waterRes: null,
    disType: null,
    appComp: null,
    series: null,
    gps: null,
    dataPlan: null,
    model: null,
    processor: null,
    music: null,
    rechargeable: null,
    battType: null,
    battStrength: null,
    height: null,
    width: null,
    len: null,
    weight: null,
    bbyWarranty: null,
    warrantyParts: null,
    warrantyLabor: null,
    name: null,
    brand: null,
    upc: null
  }
];
let dataArr = [];
//let counter = 0;
for (let x = 1; x < 1001; x++) {
  // counter = counter + 1;
  //let tempNum = 1000 - counter;
  //let temp = data.slice();
  let copy = {};
  copy.id = x;
  copy.color = `${faker.commerce.color()}, ${faker.commerce.color()}`;
  copy.waterRes = x % 2 === 0 ? "Yes" : "No";
  copy.disType = faker.random.boolean() ? "OLED" : "LED";
  copy.appComp = faker.random.boolean() ? "Yes" : "No";
  copy.series = faker.commerce.productAdjective();
  copy.gps = faker.random.boolean() ? "Yes" : "No";
  copy.dataPlan = faker.random.boolean() ? "Yes" : "No";
  copy.model = Math.floor(Math.random() * 100000);
  copy.processor = `${Math.floor(Math.random() * 5)}Ghz`;
  copy.music = faker.random.boolean() ? "Yes" : "No";
  copy.rechargeable = faker.random.boolean() ? "Yes" : "No";
  copy.battType = faker.random.boolean() ? "Lithium Ion" : "Fusion Reactor";
  copy.battStrength = faker.random.boolean() ? "Yes" : "No";
  copy.height = `${Math.floor(Math.random() * 10)}in`;
  copy.width = `${Math.floor(Math.random() * 10)}in`;
  copy.len = `${Math.floor(Math.random() * 10)}in`;
  copy.weight = `${Math.floor(Math.random() * 50)}oz`;
  copy.bbyWarranty = faker.random.boolean()
    ? "4 Years"
    : faker.random.boolean()
    ? "2 Years"
    : "Not Available";
  copy.warrantyParts = faker.random.boolean()
    ? "4 Years"
    : faker.random.boolean()
    ? "2 Years"
    : "Not Available";
  copy.warrantyLabor = faker.random.boolean()
    ? "4 Years"
    : faker.random.boolean()
    ? "2 Years"
    : "Not Available";
  copy.name = faker.commerce.productName();
  copy.brand = faker.random.boolean()
    ? "Apple"
    : faker.random.boolean()
    ? "Google"
    : faker.random.boolean()
    ? "Samsung"
    : faker.random.boolean()
    ? "Facebook"
    : faker.random.boolean()
    ? "Phillips Hue"
    : faker.random.boolean()
    ? "Amazon"
    : "Klipsch";
  copy.upc = Math.floor(Math.random() * 1000000000000000);
  dataArr.push(copy);
  // console.log(counter);
}
console.log(dataArr);
dataArr.forEach(element => {
  db.save(element, (err, res) => {
    if (err) {
      console.log("Nope");
    } else {
      console.log("Yup");
    }
  });
});
