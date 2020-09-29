import React, { useState, useEffect } from 'react';
import './noteItem.scss';

const NoteItem = ({ id, title, content, index, theme, handleDelete, handleEdit, newNote, allThemes }) => {
  const [color, setColor] = useState('#f8d613');
  const getIndexToDelete = () => {
    handleDelete(index);
  };

  const getIndexToEdit = () => {
    handleEdit(index);
  };
  const noteTheme = allThemes.find((singleTheme) => singleTheme.name === theme);

  return (
    <li className={`note__item ${newNote.title.length !== 0 || newNote.content.length !== 0 ? 'unactive' : 'active'}`}>
      <div className="note__item__container" style={{ background: noteTheme.color }}>
        <div className="note__item__container__text">
          <small>#{theme}</small>
          <h2>
            {id}º {title}
          </h2>
          <p>{content}</p>
        </div>
        <span></span>
        <span className="note__item__container__actions">
          <i className="fas fa-pencil-alt" index={index} onClick={getIndexToEdit}></i>
          <i className="fas fa-eraser" index={index} onClick={getIndexToDelete}></i>
        </span>
      </div>
    </li>
  );
};

export default NoteItem;
