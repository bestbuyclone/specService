import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      waterRes: "",
      disType: "",
      appComp: "",
      series: "",
      gps: "",
      dataPlan: "",
      model: "",
      processer: "",
      music: "",
      rechargeable: "",
      battType: "",
      battStrength: "",
      height: "",
      width: "",
      length: "",
      weight: "",
      bbyWarranty: "",
      warrantyLabor: "",
      warrantyParts: "",
      name: "",
      brand: "",
      upc: ""
    };
  }
  render() {
    return (
      <table style={{ width: "100%" }}>
        <tr>
          <th rowspan="5">Key Specs</th>
          <th>Color</th>
          <th>{this.state.color}</th>
        </tr>
        <tr>
          <th>Water Resistant</th>
          <th>{this.state.waterRes}</th>
        </tr>
        <tr>
          <th>Display Type</th>
          <th>{this.state.disType}</th>
        </tr>
        <tr>
          <th>App Compatible</th>
          <th>{this.state.appComp}</th>
        </tr>
        <tr>
          <th>Series</th>
          <th>{this.state.series}</th>
        </tr>
        <tr>
          <th rowspan="5">Features</th>
          <th>GPS Enabled</th>
          <th>{this.state.gps}</th>
        </tr>
        <tr>
          <th>Data Plan Required</th>
          <th>{this.state.dataPlan}</th>
        </tr>
        <tr>
          <th>Model Number</th>
          <th>{this.state.model}</th>
        </tr>
        <tr>
          <th>Processor Speed</th>
          <th>{this.state.processer}</th>
        </tr>
        <tr>
          <th>Music Player</th>
          <th>{this.state.music}</th>
        </tr>
        <tr>
          <th rowspan="3">Power</th>
          <th>Rechargeable</th>
          <th>{this.state.rechargeable}</th>
        </tr>
        <tr>
          <th>Battery Type</th>
          <th>{this.state.battType}</th>
        </tr>
        <tr>
          <th>Battery Strength Indicator</th>
          <th>{this.state.battStrength}</th>
        </tr>
        <tr>
          <th rowspan="4">Dimension</th>
          <th>Product Height</th>
          <th>{this.state.height}</th>
        </tr>
        <tr>
          <th>Product Width</th>
          <th>{this.state.width}</th>
        </tr>
        <tr>
          <th>Product Length</th>
          <th>{this.state.length}</th>
        </tr>
        <tr>
          <th>Product Weight</th>
          <th>{this.state.weight}</th>
        </tr>
        <tr>
          <th rowspan="3">Warranty</th>
          <th>Best Buy Warranty</th>
          <th>{this.state.bbyWarranty}</th>
        </tr>
        <tr>
          <th>Manufacturer Warranty - Labor</th>
          <th>{this.state.warrantyLabor}</th>
        </tr>
        <tr>
          <th>Manufacturer Warranty - Parts</th>
          <th>{this.state.warrantyParts}</th>
        </tr>
        <tr>
          <th rowspan="3">Other</th>
          <th>Product Name</th>
          <th>{this.state.name}</th>
        </tr>
        <tr>
          <th>Brand</th>
          <th>{this.state.brand}</th>
        </tr>
        <tr>
          <th>UPC</th>
          <th>{this.state.upc}</th>
        </tr>
      </table>
    );
  }
}

export default App;
