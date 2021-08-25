import React from "react";
import ClearIcon from "@material-ui/icons/Clear";
import S3FileUpload from "react-s3";

class ImageSelect extends React.Component {
  config = {
    bucketName: "myBucket",
    dirName: "photos" /* optional */,
    region: "eu-west-1",
    accessKeyId: "ANEIFNENI4324N2NIEXAMPLE",
    secretAccessKey: "cms21uMxçduyUxYjeg20+DEkgDxe6veFosBT7eUgEXAMPLE",
  };

  UploadS3 = () => {
    S3FileUpload.uploadFile(this?.props?.item, this.config)
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };
  render() {
    return (
      <div style={{ position: "relative" }}>
        <img
          src={URL?.createObjectURL?.(this?.props?.item)}
          width={120}
          height={120}
          style={{ borderRadius: 4 }}
        />
        <div onClick={() => this.props.deleteImage()}>
          <ClearIcon
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              color: "red",
              backgroundColor: "#000",
            }}
          />
        </div>
      </div>
    );
  }
}

export default ImageSelect;
