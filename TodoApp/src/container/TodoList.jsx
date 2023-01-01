import React, { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { NavBar, SliderMenu, TodoCard, TodoWrapper } from "../components";
import Wrapper from "../Wrapper";
import style from "./Todo.module.css";
import * as GrIcons from "react-icons/gr";
import * as CiIcons from "react-icons/ci";
import * as MdIcons from "react-icons/md";
import { statuses } from "../constants/data";
import axios from "axios";
import { useFetching } from "../context/FetchingData";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const { isFetching, setIsFetching, login, user, setUser } = useFetching();

  useEffect(() => {
    JSON.parse(localStorage.getItem("TodoUser")) &&
      setUser(JSON.parse(localStorage.getItem("TodoUser")));
    setTodos(JSON.parse(localStorage.getItem("TodoUser"))?.todos);
  }, []);
  // useEffect(() => {
  //   axios.get("https://localhost:7109/api/TodoItems").then((res) => {
  //     setTodos(res.data);
  //   });
  // }, []); old-version
  //new one

  //
  const handleDelete = (e, id) => {
    axios
      .delete(`https://localhost:7247/api/user/${user.id}/${id}`)
      .then((res) => {
        const newTodos = user.todos.filter((i) => i.id !== id);
        localStorage.setItem(
          "TodoUser",
          JSON.stringify({ ...user, todos: newTodos })
        );
        setUser({ ...user, todos: newTodos });
        setTodos(newTodos);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDrop = (item, monitor, status) => {
    setTodos((prev) => {
      const newTodos = [...prev]
        .filter((i) => i.id !== item.id)
        .concat({ ...item, status });
      return [...newTodos];
    });

    const newTodos = user.todos.map((i) => {
      if (i.id === item.id) {
        return {
          ...i,
          status: status,
        };
      } else {
        return i;
      }
    });

    localStorage.setItem(
      "TodoUser",
      JSON.stringify({ ...user, todos: newTodos })
    );
    // update todo status with
    axios
      .put(`https://localhost:7247/api/User/${user.id}`, {
        ...user,
        todos: newTodos,
      })
      .then((res) => {
        console.log(res);
      });
  };

  const moveItem = (dragIndex, hoverIndex) => {
    const item = todos[dragIndex];
    setTodos((prev) => {
      const newTodos = [...prev]?.filter((i, idx) => idx !== dragIndex);
      newTodos?.splice(hoverIndex, 0, item);
      return [...newTodos];
    });
  };

  return (
    <>
      <section
        style={{
          display: "flex",
          borderRadius: "20px",
          minHeight: "100vh",
          maxWidth: "1400px",

          flex: 1,
          backgroundColor: "#fff",
        }}
      >
        <div className={style.Sider_Menu}>
          <SliderMenu />
          <div className={`${style.Slider_bottom} ${style.Slider_Body}`}>
            <ul>
              <li>
                <span>
                  <CiIcons.CiSettings />
                </span>
                Settings
              </li>
              <li>
                <span>
                  <MdIcons.MdLogout />
                </span>
                Logout
              </li>
            </ul>
          </div>
        </div>
        <br
          style={{
            width: "3px",
            height: "100%",
            backgroundColor: "#e0e0e0",
          }}
        />
        <div className={style.Main_right}>
          <div className={style.NavBar}>
            <NavBar user={user} />
          </div>
          <div className={style.Main_right_middle}>
            <h1>Projects</h1>
            <button className={style.Main_right_middle_button}>
              This week
              <GrIcons.GrFormDown />
            </button>
          </div>
          <div className={style.Main_Content}>
            {statuses?.map((status) => (
              <TodoWrapper
                key={status.status}
                status={status.status}
                onDrop={onDrop}
              >
                {todos
                  ?.filter((i) => i.status === status.status)
                  .map((i, idx) => (
                    <TodoCard
                      key={i.id}
                      handleDelete={(e) => handleDelete(e, i.id)}
                      item={i}
                      index={idx}
                      status={status}
                      moveItem={moveItem}
                    />
                  ))}
              </TodoWrapper>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Wrapper(TodoList);
