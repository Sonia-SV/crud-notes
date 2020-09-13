import React from 'react';

const NoteItem = ({ id, title, content }) => {
  return (
    <li>
      <div>
        <h2>
          #{id} {title}
        </h2>
        <p>{content}</p>
        <span>
          <i className="fas fa-pencil-alt"></i>
          <i className="fas fa-eraser"></i>
        </span>
      </div>
    </li>
  );
};

export default NoteItem;
