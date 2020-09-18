import React, { useState, useEffect } from 'react';
import NotesPost from './header/NotesPost';
import NotesList from './notes/NotesList';
import './App.scss';

const App = () => {
  const [allNotes, setAllNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: '', content: '', id: 0 });
  const [newId, setNewId] = useState(1);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('notes'));
    if (data) {
      setAllNotes(data);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(allNotes));
  });

  const handlePostNewNote = () => {
    setAllNotes((note) => note.concat(newNote));
    setNewId(newId + 1);
    resetPostNote();
  };

  const resetPostNote = () => {
    setNewNote({ ...newNote, title: '', content: '' });
  };

  const resetId = () => {
    if (allNotes.length < 1) {
      setNewId(1);
    }
  };

  const handleInputNote = (name, value) => {
    if (allNotes.length === 0) {
      setNewId(1);
    }
    setNewNote({ ...newNote, [name]: value });
    if (newNote.id !== newId) {
      setNewNote({ ...newNote, id: newId });
    }
  };
  const handleDelete = (index) => {
    setAllNotes(allNotes.filter((note, i) => i !== index));
  };

  return (
    <main>
      <NotesPost handlePostNewNote={handlePostNewNote} handleInputNote={handleInputNote} newNote={newNote} />
      <NotesList notes={allNotes} handleDelete={handleDelete} />
    </main>
  );
};

export default App;
