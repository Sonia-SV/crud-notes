import React from 'react';
import NoteItem from './NoteItem';
import './noteList.scss';

const NotesList = ({ notes }) => {
  const singleNote = notes.map((note) => {
    return <NoteItem key={note.id + note.title} title={note.title} content={note.content} id={note.id} />;
  });

  return <ul className="note__list">{singleNote}</ul>;
};

export default NotesList;
