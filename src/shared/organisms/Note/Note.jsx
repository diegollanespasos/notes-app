import React from "react";
import "./Note.css";

export const Note = ({ title, message, date }) => {

  return (
    <React.Fragment>
      <div className="note">
        <h3>{title}</h3>
        <p>{message}</p>
        <div id='bottom-section'>
          <button onClick={() => console.log('click modify')}>Modify</button>
          <button onClick={() => console.log('click delete')}>Delete</button>
          <p>{date}</p> 
        </div>  
      </div>
    </React.Fragment>
  );
};