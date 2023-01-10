/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function ControlInputParState() {
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');

  return (
    <>
      <input
        type="text"
        placeholder="prénom"
        value={prenom}
        onChange={(event) => { setPrenom(event.target.value); }}
      />
      <input
        type="text"
        placeholder="prénom"
        value={nom}
        onChange={(event) => { setNom(event.target.value); }}
      />
    </>
  );
}

export default ControlInputParState;
