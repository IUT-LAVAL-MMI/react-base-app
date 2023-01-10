import React, { useContext } from 'react';
import ColorContext from './ColorContext';

function SousMenu() {
  const { backgroundColor } = useContext(ColorContext);

  return (
    <button type="button" style={{ backgroundColor }}>
      Un bouton avec couleur de fond
      {' '}
      {backgroundColor}
    </button>
  );
}

export default SousMenu;
