import React from "react";
import Modal from "react-modal";
import axios from "axios";
import style from "../container/Todo.module.css";
Modal.setAppElement("#root");
const TodoWindow = ({ modalIsOpen, closeModal, todoCard }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "50%",
      display: "flex",
      backgroundColor: " #e8f2f1",

      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "100%",
          flex: 1,
        }}
      >
        <button
          style={{
            border: "none",
            backgroundColor: "transparent",

            cursor: "pointer",
            outline: "none",
          }}
          onClick={closeModal}
        >
          x
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flex: 1,
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "left",
            alignItems: "center",
            width: "100%",
            marginBottom: "1rem",
            flex: 1,
            color: "#000000cc",
            flexDirection: "column",
          }}
        >
          <h1>{todoCard.title}</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "left",
            alignItems: "flex-start",
            width: "100%",
            marginBottom: "1rem",
            flex: 1,
            color: "#000000cc",
            flexDirection: "column",
          }}
        >
          <h2>Description:</h2>
          <p>{todoCard.description}</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "left",
            alignItems: "flex-start",
            width: "100%",
            flex: 1,
            marginBottom: "1rem",
            color: "#000000cc",
            flexDirection: "column",
          }}
        >
          <h3>Status:</h3>
          <p>{todoCard.status}</p>
        </div>
      </div>
    </Modal>
  );
};

export default TodoWindow;
