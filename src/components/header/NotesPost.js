import React from 'react';
import './header.scss';

const NotesPost = ({ handleCreateNewNote, handleUpdateNote, handleInputNote, newNote, isEditing, resetPostNote }) => {
  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    handleInputNote(name, value);
  };

  const handlePostNote = (ev) => {
    ev.preventDefault();
    isEditing ? handleUpdateNote() : handleCreateNewNote();
  };

  const handleResetNote = (ev) => {
    ev.preventDefault();
    resetPostNote();
  };

  return (
    <header>
      <form onSubmit={handlePostNote} onReset={handleResetNote} className="form">
        <h1 className="form__title">Tu lista de post-Its</h1>
        <h2 className="form__action">{isEditing ? 'Edita tu nota:' : 'Crea tu nota:'}</h2>
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
        <div className="form__buttons">
          <button type="reset">{isEditing ? 'Descartar cambios' : 'Descartar nota'}</button>
          <button type="submit">{isEditing ? 'Actualizar nota' : 'Publicar nota'}</button>
        </div>
      </form>
    </header>
  );
};

export default NotesPost;
