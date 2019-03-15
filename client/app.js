import React from "react";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "Red/Blue/White",
      waterRes: "5ft 30 min",
      disType: "OLED",
      appComp: "Yes",
      series: "4",
      gps: "Built-in",
      dataPlan: "Optional",
      model: "Series 4 42mm",
      processor: "24nm 6th gen",
      music: "Built in",
      rechargeable: "Yes",
      battType: "Lithium-Ion",
      battStrength: "18-24hr",
      height: ".3in",
      width: ".9in",
      len: "1.2in",
      weight: "22.4g",
      bbyWarranty: "Geek Squad Replacement",
      warrantyLabor: "2 years",
      warrantyParts: "2 years",
      name: "Apple Watch",
      brand: "Apple",
      upc: "362777625566789"
    };
  }
  componentDidMount() {
    axios
      .get("/initial")
      .then(data => {
        let results = data.data;
        console.log(results);
        this.setState(results);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <table
        style={{
          padding: ".75em",
          width: "100%",
          fontFamily: "Human BBY Web,Arial,Helvetica,sans-serif",
          textAlign: "left",
          fontSize: "15px"
        }}
      >
        <tr>
          <th
            rowspan="5"
            style={{
              fontSize: "20px",
              padding: ".75em",
              verticalAlign: "top",
              width: "30%",
              textAlign: "left"
            }}
          >
            Key Specs
          </th>
          <th>Color</th>
          <th style={{ padding: ".75em", fontWeight: "lighter" }}>
            {this.state.color}
          </th>
        </tr>
        <tr>
          <th>Water Resistant</th>
          <th style={{ padding: ".75em", fontWeight: "lighter" }}>
            {this.state.waterRes}
          </th>
        </tr>
        <tr>
          <th>Display Type</th>
          <th style={{ padding: ".75em", fontWeight: "lighter" }}>
            {this.state.disType}
          </th>
        </tr>
        <tr>
          <th>App Compatible</th>
          <th style={{ padding: ".75em", fontWeight: "lighter" }}>
            {this.state.appComp}
          </th>
        </tr>
        <tr>
          <th>Series</th>
          <th style={{ padding: ".75em", fontWeight: "lighter" }}>
            {this.state.series}
          </th>
        </tr>
        <tr>
          <th
            rowspan="5"
            style={{
              fontSize: "20px",
              padding: ".75em",
              verticalAlign: "top",
              fontSize: "20px"
            }}
          >
            Features
          </th>
          <th>GPS Enabled</th>
          <th style={{ padding: ".75em", fontWeight: "lighter" }}>
            {this.state.gps}
          </th>
        </tr>
        <tr>
          <th>Data Plan Required</th>
          <th style={{ padding: ".75em", fontWeight: "lighter" }}>
            {this.state.dataPlan}
          </th>
        </tr>
        <tr>
          <th>Model Number</th>
          <th style={{ padding: ".75em", fontWeight: "lighter" }}>
            {this.state.model}
          </th>
        </tr>
        <tr>
          <th>Processor Speed</th>
          <th style={{ padding: ".75em", fontWeight: "lighter" }}>
            {this.state.processor}
          </th>
        </tr>
        <tr>
          <th>Music Player</th>
          <th style={{ padding: ".75em", fontWeight: "lighter" }}>
            {this.state.music}
          </th>
        </tr>
        <tr>
          <th
            rowspan="3"
            style={{
              fontSize: "20px",
              padding: ".75em",
              verticalAlign: "top",
              fontSize: "20px"
            }}
          >
            Power
          </th>
          <th>Rechargeable</th>
          <th style={{ padding: ".75em", fontWeight: "lighter" }}>
            {this.state.rechargeable}
          </th>
        </tr>
        <tr>
          <th>Battery Type</th>
          <th style={{ padding: ".75em", fontWeight: "lighter" }}>
            {this.state.battType}
          </th>
        </tr>
        <tr>
          <th>Battery Strength Indicator</th>
          <th style={{ padding: ".75em", fontWeight: "lighter" }}>
            {this.state.battStrength}
          </th>
        </tr>
        <tr>
          <th
            rowspan="4"
            style={{
              fontSize: "20px",
              padding: ".75em",
              verticalAlign: "top",
              fontSize: "20px"
            }}
          >
            Dimension
          </th>
          <th>Product Height</th>
          <th style={{ padding: ".75em", fontWeight: "lighter" }}>
            {this.state.height}
          </th>
        </tr>
        <tr>
          <th>Product Width</th>
          <th style={{ padding: ".75em", fontWeight: "lighter" }}>
            {this.state.width}
          </th>
        </tr>
        <tr>
          <th>Product Length</th>
          <th style={{ padding: ".75em", fontWeight: "lighter" }}>
            {this.state.len}
          </th>
        </tr>
        <tr>
          <th>Product Weight</th>
          <th style={{ padding: ".75em", fontWeight: "lighter" }}>
            {this.state.weight}
          </th>
        </tr>
        <tr>
          <th
            rowspan="3"
            style={{
              fontSize: "20px",
              padding: ".75em",
              verticalAlign: "top",
              fontSize: "20px"
            }}
          >
            Warranty
          </th>
          <th>Best Buy Warranty</th>
          <th style={{ padding: ".75em", fontWeight: "lighter" }}>
            {this.state.bbyWarranty}
          </th>
        </tr>
        <tr>
          <th>Manufacturer Warranty - Labor</th>
          <th style={{ padding: ".75em", fontWeight: "lighter" }}>
            {this.state.warrantyLabor}
          </th>
        </tr>
        <tr>
          <th>Manufacturer Warranty - Parts</th>
          <th style={{ padding: ".75em", fontWeight: "lighter" }}>
            {this.state.warrantyParts}
          </th>
        </tr>
        <tr>
          <th
            rowspan="3"
            style={{
              fontSize: "20px",
              padding: ".75em",
              verticalAlign: "top",
              fontSize: "20px"
            }}
          >
            Other
          </th>
          <th>Product Name</th>
          <th style={{ padding: ".75em", fontWeight: "lighter" }}>
            {this.state.name}
          </th>
        </tr>
        <tr>
          <th>Brand</th>
          <th style={{ padding: ".75em", fontWeight: "lighter" }}>
            {this.state.brand}
          </th>
        </tr>
        <tr>
          <th>UPC</th>
          <th style={{ padding: ".75em", fontWeight: "lighter" }}>
            {this.state.upc}
          </th>
        </tr>
      </table>
    );
  }
}

export default App;
