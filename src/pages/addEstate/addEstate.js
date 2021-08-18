import React from "react";
import Header from "../../compoonent/header";
import style from "./style.module.css";
import TextField from "../../compoonent/textField";
import Map from "../../compoonent/Map";

class addEstate extends React.Component {
  constructor() {
    super();
    this.state = {
      latitude: 0,
      longitude: 0,
    };
  }
  render() {
    return (
      <div className={style.continer}>
        <Header />
        <div className={style.inputs}>
          <TextField
            label="Title"
            value={(Full_Name) => this.setState({ Full_Name })}
          />
          <div style={{ width: "50%", margin: 30, marginBottom: 40 }}>
            <Map
              google={this.props.google}
              center={{
                lat: 30.0384256,
                lng: 31.1820288,
              }}
              height="300px"
              zoom={15}
            />
          </div>
          <TextField
            label="Description"
            value={(Full_Name) => this.setState({ Full_Name })}
          />
          <TextField
            label="Area"
            value={(Full_Name) => this.setState({ Full_Name })}
          />
          <TextField
            label="Generetic Income"
            value={(Full_Name) => this.setState({ Full_Name })}
          />
        </div>
      </div>
    );
  }
}

export default addEstate;
