import React from "react";
import Header from "../../compoonent/header";
import style from "./style.module.css";
import TextField from "../../compoonent/textField";
import Map from "../../compoonent/Map";
import ImageUpload from "image-upload-react";
import ImageSelect from "../../compoonent/ImageSelect/imageSelect";
import { Button } from "@material-ui/core";

class addEstate extends React.Component {
  constructor() {
    super();
    this.state = {
      latitude: 0,
      longitude: 0,
      dataImage: [],
      income: false,
      dataPropety_Deed: [],
    };
  }

  picImage = () => {};

  handleImageSelect = (e, type) => {
    let uu = e.target?.files?.[0];
    let prevData = this.state.dataImage;
    prevData.push(uu);
    this.setState({ dataImage: prevData });
  };

  handledataPropety_DeedSelect = (e) => {
    let uu = e.target?.files?.[0];
    let prevData = this.state.dataPropety_Deed;
    prevData.push(uu);
    this.setState({ dataPropety_Deed: prevData });
  };

  deleteImage = (dataRemove, type) => {
    let prevData =
      type == "Image" ? this.state.dataImage : this.state.dataPropety_Deed;
    const result = prevData.filter((word) => word != dataRemove);
    type == "Image"
      ? this.setState({ dataImage: result })
      : this.setState({ dataPropety_Deed: result });
  };

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
          <div className={style.picImage}>
            <h1 className={style.textLabel}>Pictures</h1>
            <div className={style.divpickImage}>
              {this?.state?.dataImage?.map?.((item, index) => {
                return (
                  <ImageSelect
                    deleteImage={() => this.deleteImage(item, "Image")}
                    item={item}
                    key={index}
                  />
                );
              })}
              <div className={style.ImagePick}>
                <ImageUpload
                  handleImageSelect={this.handleImageSelect}
                  // imageSrc={"https://miro.medium.com/max/1400/0*xYTFQCsKDmvhFCeh"}
                  setImageSrc={(image) => console.log("set", image)}
                  style={{
                    height: 108,
                    bottom: 45,
                    backgroundColor: "#000",
                  }}
                />
              </div>
              {/* <img src="http://localhost:3000/52392433-092d-470a-b9c9-3b5f0c26a031" /> */}
              {/* </div> */}
            </div>
          </div>
          <div
            style={{
              // backgroundColor: "red",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              width: "51.5%",
              alignSelf: "center",
            }}
          >
            <TextField
              width={"40%"}
              label="Area"
              value={(Full_Name) => this.setState({ Full_Name })}
            />
            <TextField
              income={(text) => this.setState({ income: text })}
              width={"40%"}
              label="Generetic Income"
              value={(Full_Name) => this.setState({ Full_Name })}
            />
          </div>
          <div className={style.picImage}>
            <h1 className={style.textLabel}>Copy of the Propety Deed</h1>
            <div className={style.divpickImage}>
              {this?.state?.dataPropety_Deed?.map?.((item, index) => {
                return (
                  <ImageSelect
                    deleteImage={() =>
                      this.deleteImage(item, "dataPropety_Deed")
                    }
                    item={item}
                    key={index}
                  />
                );
              })}
              <div className={style.ImagePick}>
                <ImageUpload
                  handleImageSelect={this.handledataPropety_DeedSelect}
                  // imageSrc={"https://miro.medium.com/max/1400/0*xYTFQCsKDmvhFCeh"}
                  setImageSrc={(image) => console.log("set", image)}
                  style={{
                    height: 108,
                    bottom: 45,
                    backgroundColor: "#000",
                  }}
                />
              </div>
              {/* <img src="http://localhost:3000/52392433-092d-470a-b9c9-3b5f0c26a031" /> */}
              {/* </div> */}
            </div>
          </div>
          <div className={style.devPercentage}>
            <h1 className={style.textLabel}>
              Tokenizing: Percentage of Ownership
            </h1>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                margin: 0,
                padding: 0,
              }}
            >
              <TextField
                width={"20%"}
                // label="Area"
                value={(Full_Name) => this.setState({ Full_Name })}
              />
              <p style={{ marginTop: 20, fontSize: 12 }}>For</p>
              <TextField
                income={(text) => this.setState({ income: text })}
                width={"20%"}
                // label="Geeretic Income"
                value={(Full_Name) => this.setState({ Full_Name })}
              />
            </div>
          </div>
          <Button
            onClick={() => this.onClickLogin()}
            style={{
              backgroundColor: "#AE9B77",
              fontSize: "15px",
              width: "50%",
              marginbottom: 20,
              color: "#fff",
              textAlign: "center",
              textTransform: "capitalize",
              marginTop: 10,
              marginBottom: 20,
            }}
            variant="contained"
          >
            List Property
          </Button>
        </div>
      </div>
    );
  }
}

export default addEstate;
