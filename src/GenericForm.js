// src/GenericForm.js
import React from 'react';
import './GenericForm.css';

export default function GenericForm() {
  return (
    <form className="generic-form" onSubmit={e => {
      e.preventDefault();
      alert('Form Submitted!');
    }}>
      <label htmlFor="inputField">Enter your data:</label>
      <input id="inputField" type="text" placeholder="Type here" />
      <button type="submit">Submit</button>
    </form>
  );
}