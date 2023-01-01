import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import style from "../container/Todo.module.css";
import emailjs from "@emailjs/browser";
import { useFetching } from "../context/FetchingData";
Modal.setAppElement("#root");
const Window = ({ modalIsOpen, closeModal, item }) => {
  const [dataForm, setDataForm] = useState({
    id: "",
    title: "",
    description: "",
    status: "todo",
  });

  const { user, setUser } = useFetching();

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "50%",
      display: "flex",
      backgroundColor: " #ffffff",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const generateId = () => {
    return Math.floor(Math.random() * 100000000);
  };
  const handlePost = async (e) => {
    e.preventDefault();
    // dataForm.id = user.todos.length;
    dataForm.id = generateId();
    const newUser = { ...user, todos: [...user.todos, dataForm] };

    await axios
      .put(`https://localhost:7247/api/User/${user.id}`, {
        ...user,
        todos: [...user.todos, dataForm],
      })
      .then((res) => {
        console.log(user);

        emailjs
          .send(
            "service_pg2jl2m",
            "template_1stxcq9",
            {
              user_email: user.email,
              user_name: user.name,
              to_name: "User",
              title: dataForm.title,
              description: dataForm.description,
            },
            "QnKdQ6_aOFd5iGbzP"
          )
          .then((res) => {
            console.log(res.text);
          });
      });
    localStorage.setItem("TodoUser", JSON.stringify(newUser));
    // window.location.reload();
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
            alignItems: "flex-start",
            width: "100%",
            marginBottom: "1rem",
            flex: 1,
            fontWeight: "bold",
            color: " #05c8b5",
            flexDirection: "column",
          }}
        >
          <label>Title</label>
          <input
            onChange={(e) =>
              setDataForm({ ...dataForm, title: e.target.value })
            }
            required={true}
            style={{
              width: "100%",
              height: "2rem",
              border: "1px solid #0000006b",
            }}
            className={style.input_style}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "left",
            fontWeight: "bold",
            color: " #05c8b5",
            alignItems: "flex-start",
            width: "100%",
            marginBottom: "1rem",
            flex: 1,
            flexDirection: "column",
          }}
        >
          <label>Description</label>
          <textarea
            onChange={(e) =>
              setDataForm({ ...dataForm, description: e.target.value })
            }
            required={true}
            cols={30}
            rows={10}
            style={{
              width: "100%",

              border: "1px solid #0000006b",
              resize: "none",
            }}
            className={style.input_style}
          />
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
            fontWeight: "bold",
            color: " #05c8b5",
            flexDirection: "column",
          }}
        >
          <label>Status</label>
          <select
            style={{
              width: "100%",

              height: "2rem",
              transition: "all 0.3s ease",
            }}
            onChange={(e) =>
              setDataForm({ ...dataForm, status: e.target.value })
            }
            className={style.input_style}
          >
            <option value="todo">todo</option>
            <option value="In progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>

        <button
          style={{
            marginTop: "1rem",
            border: "none",
            padding: "0.5rem 1rem",
            backgroundColor: "#05c8b5",
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold",
            cursor: "pointer",
            outline: "none",
            borderRadius: "0.5rem",
          }}
          className={style.Add_button}
          onClick={handlePost}
        >
          Add New Todo
        </button>
      </div>
    </Modal>
  );
};

export default Window;
