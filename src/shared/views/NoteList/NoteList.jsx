import React, { useEffect, useState } from "react";
import { Note } from "../../organisms/Note/Note";
import { fetchNotes } from "../../services/notesService";
import "./NoteList.css";

export const NoteList = ({ listTitle }) => {
    const [notes, updateNotes] = useState();
    const [isLoading, updateLoading] = useState(true);
  
    useEffect(() => {
      receiveNotes();
    },[]);

    const receiveNotes = async() => {
        const fetchedNotes = await fetchNotes();
        updateNotes(fetchedNotes);
        updateLoading(false);
    }

    /*
    const deletePost = async () => {
      const response = await fetch(`http://3.18.221.202/api/${}`, { method: 'DELETE' });
      const data = await response.json();
      console.log(data);
    }
    */
  
    if (isLoading) {
      return <p>Loading...</p>;
    }
    if (!isLoading) {
      return (
        <React.Fragment>
          <div className='note-list'>
          <div className='top-section'>
            <h2>{listTitle}</h2>
            <button>+</button>
          </div>
          {
            notes.map(note => 
              <Note 
              key={note.id}
              title={note.title} 
              message={note.message} 
              date={note.date}
              />)
          }   
          </div>
        </React.Fragment>
      );
    }
  };