import React from "react";
import { Note } from "../../organisms/Note/Note";
import "./NoteList.css";

export const NoteList = ({ category, notes, isLoading, receiveNotes, listTitle }) => {
    if (isLoading) {
      return <p>Loading...</p>;
    }
    if (!isLoading) {
      return (
        <React.Fragment>
          <div className='note-list'>
            <h2>{listTitle}</h2>
          {
            notes.filter(note => note.category === category).map(note => 
              <Note
              id={note.id} 
              key={note.id}
              title={note.title} 
              message={note.message} 
              date={note.date}
              receiveNotes={receiveNotes}
              />)
          }   
          </div>
        </React.Fragment>
      );
    }
  };