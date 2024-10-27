'use client'
import React, { useState } from "react";

const Info = ({ book, handleDelete, handleUpdate }) => {
  const { name, title } = book; 
  const [inputText, setInputText] = useState("");
  const [inputTitle, setInputTitle] = useState("");
 
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title"> Name :{name}</h2>
          <p6>Position : {title} </p6>
          <div className="card-actions gap-10">
            <button
              onClick={() => {
                handleDelete(book);
              }}
              className="btn btn-primary w-full"
            >
              Delete
            </button>
          </div>
          <div>
            <h2>DATA UPDATE</h2>
            <input
              type="text"
              placeholder=" Name"
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
              }}
              className="input input-bordered"
            />
            <input
              type="text"
              placeholder="Position"
              value={inputTitle}
              onChange={(e) => {
                setInputTitle(e.target.value);
              }}
              className="input input-bordered"
            />
            
          </div>
          <button className="card-actions ">
            <button
              onClick={() => {
                handleUpdate(book, inputText, inputTitle);
              }}
              className="btn btn-secondary w-full "
            >
              Update
            </button>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
