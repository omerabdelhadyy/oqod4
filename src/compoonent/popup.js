import React from "react";
import Modal from "react-modal";

class popup extends React.Component {
  render() {
    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#fff",
      },
    };
    const testStyle = {
      color: "#E7ED1D",
      padding: 0,
    };
    return (
      <Modal
        isOpen={this.props.visible}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h1 style={testStyle}>sucees register</h1>
      </Modal>
    );
  }
}
export default popup;
