import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask ,editTask} from "../store/todoSlice";

export default function Form({ task }) {
  const dispatch = useDispatch()

  let form;

  const newTask = {};
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  return (
    
    <form ref={(el) => (form = el)} className="addForm">
      <input
        className="addForm__input"
        placeholder="Введите название задачи"
        onChange={(e) => setTaskName(e.target.value)}
      ></input>
      <textarea
        className="addForm__textarea"
        placeholder="Введите описание задчи"
        onChange={(e) => setTaskDescription(e.target.value)}
      ></textarea>
      <button
        onClick={() => {
          form.reset();
          newTask.taskName = taskName;
          newTask.taskDescription = taskDescription;
          if (task){
            newTask.id = task.id;
            dispatch(editTask({newTask}))
          } else{
            dispatch(addTask({newTask}));
          }
         
        }}
        className="addForm__btn"
        type="button"
      >
        Добавить
      </button>
    </form>
  );
}
