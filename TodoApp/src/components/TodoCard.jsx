import React, { useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import ITEM_TYPE from "../constants/type";
import style from "../container/Todo.module.css";
import axios from "axios";
import * as MdIcon from "react-icons/md";
import TodoWindow from "./TodoWindow";
import { useEffect } from "react";
const TodoCard = ({ item, index, moveItem, status, handleDelete }) => {
  const { title, description } = item;
  const [targetItem, setTargetItem] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const ref = useRef(null);
  const [{ isDragging, data }, drag] = useDrag(() => ({
    type: ITEM_TYPE,
    item: { ...item, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
      }
    },
  }));

  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    hover: (item, monitor) => {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const mousePosition = monitor.getClientOffset();
      const hoverClientY = mousePosition.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  drag(drop(ref));

  return (
    <>
      <div
        className={style.TodoCard}
        ref={ref}
        style={{
          opacity: isDragging ? 0 : 1,

          cursor: "pointer",
        }}
        // onClick={openModal}
      >
        <h3>{title?.length > 20 ? title?.slice(0, 20) + "..." : title}</h3>
        <p>{description}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
          onClick={(e) => {
            handleDelete(e,item.id);
          }}
        >
          {/* <div
            style={{
              borderRadius: "50%",
              width: "30px",
              height: "30px",

              position: "absolute",
              top: 0,
              left: "15px",

              backgroundColor: "red",
            }}
          ></div>
          <div
            style={{
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              zIndex: 0,

              backgroundColor: "black",
            }}
          ></div> */}
          <button>
            <MdIcon.MdDelete />
          </button>
        </div>
      </div>
      <TodoWindow
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        todoCard={item}
      />
    </>
  );
};

export default TodoCard;
