import React, { useEffect, useState } from "react";
import { Note } from "../organisms/Note";
import { fetchNotes } from "../services/notesService";

export const NoteList = () => {
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

    const postingNote = async () => {
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: 'Test Note', message: 'Adding note test' })
      };
      const response = await fetch('http://3.18.221.202/api/', requestOptions);
      const data = await response.json();
      console.log(data);
  }

  const getNoteById = async () => {
     const response = await fetch('http://3.18.221.202/api/2');
     const note = await response.json();
     console.log(note);
  }
  
    if (isLoading) {
      return <p>Loading...</p>;
    }
    if (!isLoading) {
      console.log(notes);
      return (
        <React.Fragment>
        <button className="button" onClick={() => postingNote()}>Post new note</button> 
        <button className="button" onClick={() => getNoteById()}>Get Note By ID</button>
        {
          notes.map(note => 
            <Note 
            key={note.id}
            id={note.id} 
            title={note.title} 
            message={note.message} 
            date={note.date}
            />)
        }   

        </React.Fragment>
      );
    }
  };