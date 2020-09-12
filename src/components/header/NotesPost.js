import React from 'react';

const NotesPost = ({ handlePostNewNote, handleInputNote, newNote }) => {
  return (
    <form onSubmit={handlePostNewNote} className="form">
      <h2>Rellena tu nota</h2>
      <div className="form__container">
        <label htmlFor="title">Título:</label>
        <input
          value={newNote.title}
          required
          type="text"
          placeholder="Tu título aquí"
          maxLength="22"
          name="title"
          onChange={handleInputNote}
          style={{ textTransform: 'uppercase' }}
        />
        <label htmlFor="content">Contenido:</label>
        <textarea
          value={newNote.content}
          rows="5"
          cols="28"
          placeholder="Tu descripción aquí"
          name="content"
          maxLength="100"
          onChange={handleInputNote}
          style={{ textTransform: 'uppercase' }}
        />
      </div>
      <button type="submit">Post it!</button>
    </form>
  );
};

export default NotesPost;
