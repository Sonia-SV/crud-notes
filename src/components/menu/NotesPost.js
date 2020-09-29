import React from 'react';

const NotesPost = ({ handleCreateNewNote, handleUpdateNote, handleInputNote, newNote, isEditing, resetPostNote, allThemes }) => {
  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    handleInputNote(name, value);
  };

  const themesSelect = allThemes.map((theme, index) => {
    return (
      <option key={index} value={theme.name}>
        #{theme.name}
      </option>
    );
  });

  const handlePostNote = (ev) => {
    ev.preventDefault();
    isEditing ? handleUpdateNote() : handleCreateNewNote();
  };

  const handleResetNote = (ev) => {
    ev.preventDefault();
    resetPostNote();
  };

  return (
    <section>
      <form onSubmit={handlePostNote} onReset={handleResetNote} className="aside__form">
        <h2 className="aside__form__action">{isEditing ? 'Edita tu nota:' : 'Crea tu nota:'}</h2>
        <div className="aside__form__container">
          <label htmlFor="title">Título:</label>
          <input value={newNote.title} required type="text" placeholder="Tu título aquí" maxLength="15" name="title" onChange={handleInputChange} />
          <label htmlFor="content">Contenido:</label>
          <textarea
            value={newNote.content}
            rows="5"
            cols="28"
            placeholder="Tu descripción aquí"
            name="content"
            maxLength="90"
            onChange={handleInputChange}
          />
          <label htmlFor="theme">Categoría:</label>
          <select name="theme" onChange={handleInputChange} value={newNote.theme}>
            {themesSelect}
          </select>
        </div>
        <div className="aside__form__buttons">
          <button type="submit">{isEditing ? 'Actualizar nota' : 'Publicar nota'}</button>
          <button type="reset">{isEditing ? 'Descartar cambios' : 'Descartar nota'}</button>
        </div>
      </form>
    </section>
  );
};

export default NotesPost;
