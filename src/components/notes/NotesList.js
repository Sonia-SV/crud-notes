import React from 'react';
import NoteItem from './NoteItem';
import './noteList.scss';

const NotesList = ({ notes, handleDelete, handleEdit, newNote, deleteAllNotes, allThemes }) => {
  const singleNote = notes.map((note, index) => {
    return (
      <NoteItem
        key={note.id + note.title}
        title={note.title}
        content={note.content}
        id={note.id}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        index={index}
        theme={note.theme}
        newNote={newNote}
        allThemes={allThemes}
      />
    );
  });

  return (
    <section className="note__section">
      {notes.length !== 0 ? (
        <div className="note__section__button">
          <button onClick={deleteAllNotes}>Borrar todas las notas</button>
        </div>
      ) : (
        ''
      )}
      <ul className="note__section__list">{singleNote}</ul>
    </section>
  );
};

export default NotesList;
