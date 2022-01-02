import React, { useContext } from 'react';
import ColorContext from './ColorContext';

function SousMenuB() {
  const ctx = useContext(ColorContext);

  const changerCouleur = () => {
    ctx.backgroundColor = ctx.backgroundColor === 'grey' ? 'red' : 'grey';
  };

  return (
    <button type="button" onClick={changerCouleur}>
      Changer la couleur de fond
      {' '}
      {ctx.backgroundColor}
    </button>
  );
}

export default SousMenuB;
