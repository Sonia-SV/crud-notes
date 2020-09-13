import React from 'react';
import './noteItem.scss';

const NoteItem = ({ id, title, content }) => {
  return (
    <li className="note__item">
      <div className="note__item__container">
        <div className="note__item__container__text">
          <h2>
            #{id} {title}
          </h2>
          <p>{content}</p>
        </div>
        <span className="note__item__container__actions">
          <i className="fas fa-pencil-alt"></i>
          <i className="fas fa-eraser"></i>
        </span>
      </div>
    </li>
  );
};

export default NoteItem;