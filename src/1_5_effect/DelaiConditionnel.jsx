/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export function DelaiConditionnel({ indicateur }) {
  console.log('(re-)Rendu du composant...');
  const [nbChangIndic, setNbChangIndic] = useState(0);

  useEffect(() => {
    console.log('Preparation du timeout de mise à jour du compteur de changement...');
    let idTimeout = setTimeout(() => {
      console.log('Modification du compteur de changement...');
      setNbChangIndic((prevCount) => prevCount + 1);
      idTimeout = null;
    }, 2000);
    return () => {
      if (idTimeout !== null) {
        console.log('Annulation du timeout...');
        clearTimeout(idTimeout);
      }
    };
  }, [indicateur]);

  return (
    <h3>
      Delai conditionnel Indicateur=
      {indicateur}
      {' '}
      Nombre de changements=
      {nbChangIndic}
    </h3>
  );
}

DelaiConditionnel.propTypes = {
  indicateur: PropTypes.PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool]).isRequired,
};

export default DelaiConditionnel;
