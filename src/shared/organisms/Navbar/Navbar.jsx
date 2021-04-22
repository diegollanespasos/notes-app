import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar">
                <div class="left-navbar">
                    <h2>Notes App</h2>
                </div>
                <div class="right-navbar">
                    <button class="nav-button">Home</button>
                    <button class="nav-button">Add Note</button>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;