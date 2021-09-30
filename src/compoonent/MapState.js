import React from "react";
import Map from "./Map";

class MapState extends React.Component {
  render() {
    return (
      <Map
        address={(address) => this.props?.address?.(address)}
        google={this?.props?.google}
        center={{
          lat: 30.0384256,
          lng: 31.1820288,
        }}
        height="300px"
        zoom={15}
      />
    );
  }
}

export default MapState;
