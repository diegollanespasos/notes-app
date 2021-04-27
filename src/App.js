import React, { useEffect, useState } from "react";
import './App.css';
import NoteList from './shared/views/NoteList/NoteList';
import NoteForm from './shared/organisms/NoteForm/NoteForm';
import { fetchNotes } from './shared/services/notesService.js';

const App = () => {
  const [notes, updateNotes] = useState();
  const [isLoading, updateLoading] = useState(true);
  const [id, setID] = useState();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState(1);

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

  const modifyNote = (id, title, message, category) => {
    setID(id);
    setTitle(title);
    setMessage(message);
    setCategory(category);
  }
  
  return (
    <div className="App">
        <div className='notes-board'>
          <NoteList  listTitle='To Do' notes={notes} category={1} modifyNote={modifyNote} receiveNotes={receiveNotes} isLoading={isLoading}/>
          <NoteList listTitle='Doing' notes={notes} category={2} modifyNote={modifyNote} receiveNotes={receiveNotes} isLoading={isLoading} />
          <NoteList listTitle='Done' notes={notes} category={3}  modifyNote={modifyNote} receiveNotes={receiveNotes} isLoading={isLoading} />
        </div>
        <div className='container-note-form'>
          <h2>Post - Modify</h2>
          <NoteForm
          id={id}
          title={title}
          message={message} 
          category={category}
          setTitle={setTitle}
          setMessage={setMessage}
          setCategory={setCategory}
          receiveNotes={receiveNotes}/>
        </div>
    </div>
  );
}

export default App;