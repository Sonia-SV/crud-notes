import React, { useState } from 'react';

const NotesColors = () => {
  const [categories, setCategories] = useState({ 1: {}, 2: {} });

  const handleCategory = (ev) => {
    console.log([ev.target.name]);
  };
  return (
    <section>
      <h2>Personaliza tus categorías por color</h2>
      <form className="form__color" onChange={handleCategory}>
        {/* <input type="color" className="input-color" /> */}
        <input type="text" name="0" placeholder="ej. general" />
      </form>
      <form className="form__color" onChange={handleCategory}>
        {/* <input type="color" className="input-color" /> */}
        <input type="text" name="1" placeholder="ej. trabajo" />
      </form>
      <form className="form__color" onChange={handleCategory}>
        {/* <input type="color" className="input-color" /> */}
        <input type="text" name="2" placeholder="ej. personal" />
      </form>
      <form className="form__color" onChange={handleCategory}>
        {/* <input type="color" className="input-color" /> */}
        <input type="text" name="3" placeholder="ej. urgente" />
      </form>
    </section>
  );
};

export default NotesColors;
