/* eslint-disable react/prop-types */
import React from 'react';

function Voiture({ name, color }) {
  return (
    <div>
      <span className="bold">{name}</span>
      <span className="small">
        Couleur:
        {color}
      </span>
    </div>
  );
}

export default Voiture;
