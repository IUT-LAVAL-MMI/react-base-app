/* eslint-disable no-console */
import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';

export function LogSystematique() {
  console.log('(re-)Rendu du composant...');

  useEffect(() => {
    console.log('Le composant a été monté/mis-jour correctement dans le DOM.');
  });

  return (
    <h3>Log sytematique !</h3>
  );
}

export default LogSystematique;
