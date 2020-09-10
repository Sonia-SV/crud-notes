import React, { useState } from 'react';

const NotesPost = ({ handlePostNewNote, handleInputNote }) => {
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
            type="text"
            placeholder="Tu título aquí"
            maxLength="22"
            name="title"
            onInput={handleInputChange}
            style={{ textTransform: 'uppercase' }}
          />
          <label htmlFor="content">Contenido:</label>
          <textarea
            rows="5"
            cols="28"
            placeholder="Tu descripción aquí"
            name="content"
            maxLength="100"
            onInput={handleInputChange}
            style={{ textTransform: 'uppercase' }}
          />
        </div>
        <button>Post it!</button>
      </form>
    </header>
  );
};

export default NotesPost;
