import './App.css';
import { NoteList } from './shared/views/NoteList/NoteList';
//import Navbar from './shared/organisms/Navbar/Navbar';
import NoteForm from './shared/organisms/NoteForm/NoteForm';

function App() {
  return (
    <div className="App">
        <div className='notes-board'>
          <NoteList listTitle='To Do' />
          <NoteList listTitle='Doing' />
          <NoteList listTitle='Done' />
        </div>
        <div className='container-note-form'>
          <h2>Post a note</h2>
          <NoteForm />
        </div>
    </div>
  );
}

export default App;