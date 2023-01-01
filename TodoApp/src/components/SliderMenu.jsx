import React from "react";
import * as AiIcon from "react-icons/ai";
import * as BsIcon from "react-icons/bs";
import * as LoIcon from "react-icons/io";

import style from "../container/Todo.module.css";
const SliderMenu = () => {
  return (
    <>
      <div className={style.Slider_Body}>
        <h1>Todo App</h1>
        <ul>
          <li>
            <span>
              <AiIcon.AiOutlineHome />
            </span>
            Overview
          </li>
          <li>
            <span>
              <LoIcon.IoIosStats />
            </span>
            Stats
          </li>
          <li>
            <span>
              <AiIcon.AiFillFolderOpen />
            </span>
            Projects
          </li>
          <li>
            <span>
              <BsIcon.BsChatLeftDots />
            </span>
            Chat
          </li>
          <li>
            <span>
              <BsIcon.BsCalendarDate />
            </span>
            Calender
          </li>
        </ul>
      </div>
    </>
  );
};

export default SliderMenu;
