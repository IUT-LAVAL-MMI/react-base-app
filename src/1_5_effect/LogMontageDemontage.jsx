/* eslint-disable no-console */
import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';

export function LogMontageDemontage() {
  console.log('(re-)Rendu du composant...');

  useEffect(() => {
    console.log('Le composant a été monté dans le DOM.');
    return () => {
      console.log('Le composant va être démonté du DOM.');
    };
  }, []);

  return (
    <h3>Log Montage / Démontage !</h3>
  );
}

export default LogMontageDemontage;
