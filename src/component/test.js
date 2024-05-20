import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { activePage, donePage } from "../action/action";

export default function Test() {
  const dispatch = useDispatch();
  const val = useSelector((state) => state);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(activePage());
        }}
      >
        "123"
      </button>
      <button
        onClick={() => {
          dispatch(donePage());
        }}
      >
        "321"
      </button>
      <p>{val}</p>
    </div>
  );
}
