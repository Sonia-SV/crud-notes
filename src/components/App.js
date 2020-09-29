import React, { useState, useEffect } from 'react';
import Aside from './menu/Aside';
import NotesList from './notes/NotesList';
import './App.scss';

const App = () => {
  const [allNotes, setAllNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: '', content: '', theme: 'general', id: 0 });
  const [newId, setNewId] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState('');
  const [allThemes, setAllThemes] = useState([
    { name: 'general', color: '#f8d613' },
    { name: 'trabajo', color: '#65eafc' },
    { name: 'personal', color: '#f601aa' },
    { name: 'urgente', color: '#ff950a' },
  ]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('notes'));
    if (data) {
      setAllNotes(data.allNotes);
      setNewId(data.newId);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify({ allNotes, newId }));
  });

  const handleCreateNewNote = () => {
    setAllNotes((note) => note.concat(newNote));
    setNewId(newId + 1);
    resetPostNote();
  };

  const handleUpdateNote = () => {
    setIsEditing(false);
    resetPostNote();
    const updatingNote = allNotes;
    updatingNote[editingIndex].title = newNote.title;
    updatingNote[editingIndex].content = newNote.content;
    updatingNote[editingIndex].theme = newNote.theme;
    setAllNotes(updatingNote);
  };

  const resetPostNote = () => {
    setNewNote({ ...newNote, title: '', content: '', theme: 'general' });
    setIsEditing(false);
  };

  const deleteAllNotes = () => {
    setAllNotes([]);
    setNewId(1);
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

  const handleEdit = (index) => {
    setNewNote(allNotes[index]);
    setIsEditing(true);
    setEditingIndex(index);
  };

  const handleUserColors = (ev) => {
    // const newColors = colors;
    // newColors[ev.target.name] = ev.target.value;
    // setColors(newColors);
  };

  return (
    <>
      <header className="header">
        <h1 className="header__title">Tu lista de post-Its</h1>
      </header>
      <main className="main">
        <Aside
          handleCreateNewNote={handleCreateNewNote}
          handleUpdateNote={handleUpdateNote}
          handleInputNote={handleInputNote}
          newNote={newNote}
          isEditing={isEditing}
          resetPostNote={resetPostNote}
          handleUserColors={handleUserColors}
          allThemes={allThemes}
        />

        <NotesList
          notes={allNotes}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          newNote={newNote}
          deleteAllNotes={deleteAllNotes}
          allThemes={allThemes}
        />
      </main>
      <footer className="footer">
        <p>
          A CRUD project by{' '}
          <a href="https://sonia-sv.github.io/portfolio/#/" target="_blank" rel="noopener noreferrer">
            Sonia Sanz Vivas
          </a>
        </p>
      </footer>
    </>
  );
};

export default App;
