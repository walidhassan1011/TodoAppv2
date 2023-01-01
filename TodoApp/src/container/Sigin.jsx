import React from "react";
import { useFetching } from "../context/FetchingData";
import { Link } from "react-router-dom";

const Sigin = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const { isFetching, login } = useFetching();

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
        onSubmit={(e) => {
          e.preventDefault();
          login(formData.email, formData.password);
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          height: "50%",
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
            type="text"
            name="email"
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
            height: "50px",
            backgroundColor: "rgb(41, 154, 132)",
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            outline: "none",
            marginTop: "10px",
          }}
        >
          Sign In
        </button>
        <Link to="/signup" style={{ textDecoration: "none", color: "black" }}>
          <span>
            Don't have an account? <b>Sign Up</b>
          </span>
        </Link>
      </form>
    </div>
  );
};

export default Sigin;
