import React, { useState } from "react";
import { HiArchiveBoxXMark } from "react-icons/hi2"; //удалить
import { HiMiniCheckBadge } from "react-icons/hi2"; //завершить
import { HiMiniPencilSquare } from "react-icons/hi2"; // редактировать
import { useDispatch } from "react-redux";
import { delTask , completedTask} from "../store/todoSlice";
import Form from "./form";

export default function Task({ el}) {
  const dispatch = useDispatch()

  const [editForm, setEditForm] = useState(false);

  return (
    <li className={"task " + el.className}>
      <div className="icons-block">
        <HiArchiveBoxXMark
          className="icon"
          onClick={() => {
            dispatch(delTask({el}));
          }}
        />
        <HiMiniCheckBadge
          className={el.isCompl ? "hide" : "icon"}
          onClick={() => {
            dispatch(completedTask({el}))
            setTimeout(()=>dispatch(delTask({el})),1000);
        }}
        />
        <HiMiniPencilSquare
         className={el.isCompl ? "hide" : "icon"}
          onClick={() => {
            setEditForm(!editForm);
          }}
        />
      </div>
      <h1 className="taskName">{el.taskName}</h1>
      <p className="taskDescription">{el.taskDescription}</p>
      {editForm && <Form task={el}  />}
    </li>
  );
}
