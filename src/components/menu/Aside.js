import React from 'react';
import NotesColor from './NotesColor';
import NotesPost from './NotesPost';
import './aside.scss';

const Aside = ({ handleCreateNewNote, handleUpdateNote, handleInputNote, newNote, isEditing, resetPostNote, allThemes, handleUserColors }) => {
  return (
    <aside className="aside">
      <NotesPost
        handleCreateNewNote={handleCreateNewNote}
        handleUpdateNote={handleUpdateNote}
        handleInputNote={handleInputNote}
        newNote={newNote}
        isEditing={isEditing}
        allThemes={allThemes}
        resetPostNote={resetPostNote}
      />
      {/* <NotesColor handleUserColors={handleUserColors} /> */}
    </aside>
  );
};
export default Aside;
