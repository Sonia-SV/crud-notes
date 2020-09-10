import React, { useState } from 'react';
import NotesPost from './NotesPost';
import NotesList from './NotesList';
import './App.scss';

const App = () => {
  const [allNotes, setAllNotes] = useState([]);
  const [newNote, setNewNote] = useState({});
  const [newId, setNewId] = useState(1);

  const handlePostNewNote = () => {
    setAllNotes((note) => note.concat(newNote));
  };

  const handleInputNote = (name, value) => {
    setNewNote({ ...newNote, [name]: value });
  };

  return (
    <main>
      <NotesPost handlePostNewNote={handlePostNewNote} handleInputNote={handleInputNote} />
      <NotesList notes={allNotes} />
    </main>
  );
};

export default App;
