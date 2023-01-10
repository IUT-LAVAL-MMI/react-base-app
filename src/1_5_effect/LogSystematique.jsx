/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';

export function LogSystematique() {
  const [cpt, setCpt] = useState(0);

  console.log('(re-)Rendu du composant...');

  useEffect(() => {
    console.log('Le composant a été monté/mis-jour correctement dans le DOM.');
  });

  const incCpt = () => {
    setCpt((c) => c + 1);
  };

  return (
    <>
      <h3>
        Log sytematique (cpt =&nbsp;
        {cpt}
        ) !
      </h3>
      <button type="button" onClick={incCpt}>Incrémenter le compteur</button>
    </>
  );
}

export default LogSystematique;
