import React, { useEffect, useState } from "react";
import TodoCard from "./TodoCard";
import style from "../container/Todo.module.css";
import * as GrIcons from "react-icons/gr";
import { useDrop } from "react-dnd";
import { statuses } from "../constants/data";
import Window from "./Window";
import ITEM_TYPE from "../constants/type";
import Modal from "react-modal";

Modal.setAppElement("#root");
const TodoWrapper = ({ onDrop, children, status }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const [{ isOver, data }, drop] = useDrop({
    accept: ITEM_TYPE,
    canDrop: (item, monitor) => {
      const itemIndex = statuses.findIndex((i) => i.status === item.status);
      const statusIndex = statuses.findIndex((i) => i.status === status);
      return [itemIndex + 1, itemIndex - 1, itemIndex].includes(statusIndex);
    },
    drop: (item, monitor) => {
      onDrop(item, monitor, status);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <>
      <div ref={drop} className={style.Todos}>
        <div className={style.Counter_btn}>
          <span>{status.toUpperCase()}</span>
        </div>
        <button onClick={openModal}>
          <GrIcons.GrFormAdd />
        </button>
        <div className={style.TodoBody} ref={drop}>
          {children}
        </div>
      </div>
      <Window modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </>
  );
};

export default TodoWrapper;
