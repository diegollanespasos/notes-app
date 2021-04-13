import React from "react";
import "./Note.css";

export const Note = ({ id, title, message, date }) => {

  return (
    <React.Fragment>
      <div className="note">
        <h2>{`#${id}`}</h2>
        <h2>{`Title: ${title}`}</h2>
        <p>{`Mesage: ${message}`}</p>
        <p>{`Date: ${date}`}</p>
      </div>
    </React.Fragment>
  );
};