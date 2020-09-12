import React from 'react';
import NotesPost from './NotesPost';
import NotesColors from './NotesColors';
import './header.scss';

const Header = ({ handlePostNewNote, handleInputNote, newNote }) => {
  return (
    <header className="header">
      <h1>Crea tu nota</h1>
      <div>
        <NotesPost handlePostNewNote={handlePostNewNote} handleInputNote={handleInputNote} newNote={newNote} />
        <NotesColors />
      </div>
    </header>
  );
};

export default Header;
