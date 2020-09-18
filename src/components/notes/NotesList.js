import React from 'react';
import NoteItem from './NoteItem';
import './noteList.scss';

const NotesList = ({ notes, handleDelete, handleEdit }) => {
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
      />
    );
  });

  return <ul className="note__list">{singleNote}</ul>;
};

export default NotesList;
