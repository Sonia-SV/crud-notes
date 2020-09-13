import React from 'react';
import './header.scss';

const NotesPost = ({ handlePostNewNote, handleInputNote, newNote }) => {
  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    handleInputNote(name, value);
  };

  const handleCreateNewNote = (ev) => {
    ev.preventDefault();
    handlePostNewNote();
  };

  return (
    <header>
      <form onSubmit={handleCreateNewNote} className="form">
        <h1>Crea tu nota</h1>
        <div className="form__container">
          <label htmlFor="title">Título:</label>
          <input
            value={newNote.title}
            required
            type="text"
            placeholder="Tu título aquí"
            maxLength="15"
            name="title"
            onChange={handleInputChange}
            style={{ textTransform: 'uppercase' }}
          />
          <label htmlFor="content">Contenido:</label>
          <textarea
            value={newNote.content}
            rows="5"
            cols="28"
            placeholder="Tu descripción aquí"
            name="content"
            maxLength="90"
            onChange={handleInputChange}
            style={{ textTransform: 'uppercase' }}
          />
        </div>
        <button type="submit">Post it!</button>
      </form>
    </header>
  );
};

export default NotesPost;
