import React, { useEffect, useState } from "react";
import './App.css';
import { NoteList } from './shared/views/NoteList/NoteList';
import NoteForm from './shared/organisms/NoteForm/NoteForm';
import { fetchNotes } from './shared/services/notesService.js';
//import Navbar from './shared/organisms/Navbar/Navbar';

const App = () => {
  const [notes, updateNotes] = useState();
  const [isLoading, updateLoading] = useState(true);

  useEffect(() => {
    receiveNotes();
  },[]);

  const receiveNotes = async() => {
      try {
        const fetchedNotes = await fetchNotes();
        updateNotes(fetchedNotes);
        updateLoading(false);
      } catch(e){
        console.log(e.message);
      }
  }

  const postingNote = async (title, message, category) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ title: title, message: message, category: category })
    };
    try {
      await fetch('http://3.21.165.187/api', requestOptions);
      receiveNotes(notes);
    } catch(e){
      console.log(e.message);
    }
  }

  return (
    <div className="App">
        <div className='notes-board'>
          <NoteList listTitle='To Do' notes={notes} category={1} isLoading={isLoading} receiveNotes={receiveNotes}/>
          <NoteList listTitle='Doing' notes={notes} category={2} isLoading={isLoading} receiveNotes={receiveNotes}/>
          <NoteList listTitle='Done' notes={notes} category={3}  isLoading={isLoading} receiveNotes={receiveNotes}/>
        </div>
        <div className='container-note-form'>
          <h2>Post a note</h2>
          <NoteForm postingNote={postingNote}/>
        </div>
    </div>
  );
}

export default App;