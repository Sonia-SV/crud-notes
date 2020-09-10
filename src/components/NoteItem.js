import React from 'react';

const NoteItem = ({ id, title, content }) => {
  return (
    <li>
      <div>
        <h2>
          {/* #{id}  */}
          {title}
        </h2>
        <p>{content}</p>
      </div>
    </li>
  );
};

export default NoteItem;
