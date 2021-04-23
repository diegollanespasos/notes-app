import React,{ useState } from 'react';
import "./NoteForm.css";

const NoteForm = ({ postingNote }) => {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [category, setCategory] = useState(1);
  
    const handleSubmit = (event) => {
        event.preventDefault();
        postingNote(title, message, category);   
    }

    return (
        <React.Fragment>
            <div className='note-form'>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='Title'
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                    />
                    <textarea 
                    onChange={event => setMessage(event.target.value)} 
                    placeholder='Description' 
                    value={message} 
                    name="message" 
                    rows="6" 
                    cols="30" />
                    <label>Category</label>
                        <select value={category} onChange={event => setCategory(event.target.value)} id="category" name="category">
                            <option value={1}>To Do</option>
                            <option value={2}>Doing</option>
                            <option value={3}>Done</option>
                        </select>
                    <input type="submit" value="Submit" />
                </form>
            </div> 
        </React.Fragment>
    )
}
export default NoteForm;