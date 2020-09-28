import React, { useState, useEffect } from 'react';
import './noteItem.scss';

const NoteItem = ({ id, title, content, index, handleDelete, handleEdit, newNote }) => {
  const [color, setColor] = useState('#f8d613');
  const getIndexToDelete = () => {
    handleDelete(index);
  };

  const getIndexToEdit = () => {
    handleEdit(index);
  };
  return (
    <li className={`note__item ${newNote.title.length !== 0 || newNote.content.length !== 0 ? 'unactive' : 'active'}`}>
      <div className="note__item__container" style={{ background: color }}>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        <div className="note__item__container__text">
          <h2>
            #{id} {title}
          </h2>
          <p>{content}</p>
        </div>
        <span className="note__item__container__actions">
          <i className="fas fa-pencil-alt" index={index} onClick={getIndexToEdit}></i>
          <i className="fas fa-eraser" index={index} onClick={getIndexToDelete}></i>
        </span>
      </div>
    </li>
  );
};

export default NoteItem;
