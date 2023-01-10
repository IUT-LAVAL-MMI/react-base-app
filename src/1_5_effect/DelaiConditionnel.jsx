/* eslint-disable no-console, react/prop-types */
import React, { useEffect, useState } from 'react';

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

export default DelaiConditionnel;
