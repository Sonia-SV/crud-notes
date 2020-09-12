import React, { useState } from 'react';
import Header from './header/Header';
import NotesList from './NotesList';
import './App.scss';

const App = () => {
  const [allNotes, setAllNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: '', content: '', id: 0 });
  const [newId, setNewId] = useState(1);
  // const [categories, setCategories] = useState([]);

  const handlePostNewNote = (ev) => {
    ev.preventDefault();
    setAllNotes((note) => note.concat(newNote));
    setNewId(newId + 1);
    resetPostNote();
  };

  const resetPostNote = () => {
    setNewNote({ ...newNote, title: '', content: '' });
  };

  const handleInputNote = (ev) => {
    const { name, value } = ev.target;
    setNewNote({ ...newNote, [name]: value });
    if (newNote.id !== newId) {
      setNewNote({ ...newNote, id: newId });
    }
  };

  return (
    <main>
      <Header handlePostNewNote={handlePostNewNote} handleInputNote={handleInputNote} newNote={newNote} />
      <NotesList notes={allNotes} />
    </main>
  );
};

export default App;
