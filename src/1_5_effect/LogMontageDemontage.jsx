/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';

function LogMontageDemontage() {
  const [cpt, setCpt] = useState(0);
  console.log('(re-)Rendu du composant...');

  useEffect(() => {
    console.log('Le composant a été monté dans le DOM.');
    return () => {
      console.log('Le composant va être démonté du DOM.');
    };
  }, []);

  return (
    <>
      <h3>Log Montage / Démontage !</h3>
      <div>
        Compteur:&nbsp;
        {cpt}
      </div>
      <button type="button" onClick={() => setCpt(cpt + 1)}>Incrémenter le compteur</button>
    </>

  );
}

function LogParent() {
  const [showLog, setshowLog] = useState(false);

  const msg = showLog ? 'Masquer' : 'Afficher';

  return (
    <>
      <button type="button" onClick={() => setshowLog(!showLog)}>{msg}</button>
      {showLog && (<LogMontageDemontage />)}
    </>
  );
}

export default LogParent;
