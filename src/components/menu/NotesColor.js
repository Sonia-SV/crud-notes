import React from 'react';

const NotesColor = ({ colors, handleUserColors }) => {
  const setUserColor = (ev) => {
    handleUserColors(ev);
  };
  return (
    <section>
      <h3>Personaliza tus categorías por color:</h3>
      <form className="aside__form__color">
        <div className="aside__form__color__container">
          <input
            type="color"
            name="0"
            className="input-color"
            // value={colors[0]}
            onChange={setUserColor}
          />
          <input type="text" name="0" placeholder="ej. general" />
        </div>
        <div className="aside__form__color__container">
          <input
            type="color"
            name="1"
            className="input-color"
            // value={colors[1]}
            onChange={setUserColor}
          />
          <input type="text" name="1" placeholder="ej. trabajo" />
        </div>
        <div className="aside__form__color__container">
          <input
            type="color"
            name="2"
            className="input-color"
            // value={colors[2]}
            onChange={setUserColor}
          />
          <input type="text" name="2" placeholder="ej. personal" />
        </div>
        <div className="aside__form__color__container">
          <input
            type="color"
            name="3"
            className="input-color"
            // value={colors[3]}
            onChange={setUserColor}
          />
          <input type="text" name="3" placeholder="ej. urgente" />
        </div>
      </form>
    </section>
  );
};

export default NotesColor;
