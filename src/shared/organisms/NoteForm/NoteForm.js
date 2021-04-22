import React,{ useState } from 'react';
import "./NoteForm.css";

const NoteForm = () => {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
  
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(message);   
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
                    <input type="submit" value="Submit" />
                </form>
            </div> 
        </React.Fragment>
    )
}
export default NoteForm;