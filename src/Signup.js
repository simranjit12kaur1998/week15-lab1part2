// src/Signup.js
import React from 'react';

export default function Signup() {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      alert('Submitting!');
    }}>
      <input placeholder="Enter your email" />
      <button>Send</button>
    </form>
  );
}