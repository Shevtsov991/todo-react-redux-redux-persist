import React from "react";
import { useDispatch } from "react-redux";
import { appReducer } from "../store/todoSlice";
export default function Header() {
  const dispatch = useDispatch();

  return (
    <header>
      <p>Твой список Задач</p>
      <div className="header__dropdown">
        <button className="dropDown__button">Список задач</button>
        <ul className="dropdown__List">
          <li
            className="dropdown__item"
            id="active"
            onClick={() => {
              dispatch(appReducer("true"));
            }}
          >
            Активные задачи
          </li>
          <li
            className="dropdown__item"
            id="complite"
            onClick={() => {
              dispatch(appReducer("false"));
            }}
          >
            Завершённые задачи
          </li>
        </ul>
      </div>
    </header>
  );
}
