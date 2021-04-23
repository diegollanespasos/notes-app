import React from "react";
import { Note } from "../../organisms/Note/Note";
import "./NoteList.css";

const NoteList = ({ notes, listTitle, category, modifyNote, receiveNotes, isLoading }) => {
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
              key={note.id}
              id={note.id} 
              title={note.title} 
              message={note.message} 
              date={note.date}
              category={category}
              receiveNotes={receiveNotes}
              modifyNote={modifyNote}
              />)
          }   
          </div>
        </React.Fragment>
      );
    }
  };

  export default NoteList;