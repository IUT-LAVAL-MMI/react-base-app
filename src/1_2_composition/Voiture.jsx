/* eslint-disable react/prop-types */
import React from 'react';

function Voiture({ name, color }) {
  return (
    <div>
      <span className="bold">{name}</span>
      &nbsp;
      <span className="small">
        Couleur:&nbsp;
        {color}
      </span>
    </div>
  );
}

export default Voiture;
