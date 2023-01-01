import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    todos: [],
  });
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    axios.post("https://localhost:7247/api/User", formData).then((res) => {
      if (res.status === 200) {
        emailjs
          .sendForm(
            "service_pg2jl2m",
            "template_rql84wj",
            form.current,
            "QnKdQ6_aOFd5iGbzP"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
        navigate("/signin");
      }
    });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        backgroundColor: "rgb(233, 243, 242)",
      }}
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          minHeight: "50%",
          padding: "10px",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          backgroundColor: "rgb(248, 250, 249)",
          borderRadius: "5px",
        }}
      >
        <h1
          style={{
            fontSize: "30px",
            marginBottom: "10px",
            fontWeight: "bold",
            color: "rgb(41, 154, 132)",
            textTransform: "uppercase",
          }}
        >
          WELCOME TO WILLY TODO
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "60%",
            marginBottom: "10px",
            gap: "5px",
          }}
        >
          <label
            htmlFor="Name"
            style={{
              fontSize: "20px",
              marginBottom: "-5px",
              color: "rgb(41, 154, 132)",
            }}
          >
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="Name"
            style={{
              backgroundColor: "rgb(233, 243, 242)",
              border: "none",
              borderBottom: "1px solid black",
              outline: "none",
              fontSize: "20px",
              fontWeight: "bold",
              color: "black",
            }}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "60%",
            marginBottom: "10px",
            gap: "5px",
          }}
        >
          <label
            htmlFor="email"
            style={{
              fontSize: "20px",
              marginBottom: "-5px",
              color: "rgb(41, 154, 132)",
            }}
          >
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="email"
            style={{
              backgroundColor: "rgb(233, 243, 242)",
              border: "none",
              borderBottom: "1px solid black",
              outline: "none",
              fontSize: "20px",
              fontWeight: "bold",
              color: "black",
            }}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "60%",
            marginBottom: "10px",
            gap: "5px",
          }}
        >
          <label
            htmlFor="password"
            style={{
              fontSize: "20px",
              marginBottom: "-5px",
              color: "rgb(41, 154, 132)",
            }}
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            style={{
              backgroundColor: "rgb(233, 243, 242)",
              border: "none",
              borderBottom: "1px solid black",
              outline: "none",
              fontSize: "20px",
              fontWeight: "bold",
              color: "black",
            }}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>

        <button
          type="submit"
          style={{
            width: "30%",
            height: "40px",
            backgroundColor: "rgb(41, 154, 132)",
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
            border: "none",
            textTransform: "uppercase",
            borderRadius: "5px",
            cursor: "pointer",
            outline: "none",
            marginTop: "10px",
          }}
          value="Send"
        >
          Sign Up
        </button>
        <Link to="/signin" style={{ textDecoration: "none", color: "black" }}>
          <span>
            You already have an account? <b>SignIn</b>
          </span>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
