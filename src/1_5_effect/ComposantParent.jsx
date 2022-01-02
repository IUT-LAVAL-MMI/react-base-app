/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ComposantEnfant from './DelaiConditionnel';

// Juste pour pouvoir provoquer les re-rendu du composant enfant puis le démonter
function ComposantParent() {
  const [cpt, setCpt] = useState(0);
  const [indic, setIndic] = useState('faux');
  const rotateCpt = () => setCpt(cpt >= 5 ? 0 : cpt + 1);
  const switchIndic = () => setIndic(indic === 'faux' ? 'vrai' : 'faux');

  return (
    <>
      <h1>Composant Parent</h1>
      <div>
        <button type="button" onClick={rotateCpt}>
          Rotationer cpt (
          {cpt}
          )
        </button>
      </div>
      <div>
        <button type="button" onClick={switchIndic}>
          Inverser indic (
          {indic}
          )
        </button>
      </div>
      {
        cpt < 4 && (
          <ComposantEnfant compteur={cpt} indicateur={indic} />
        )
      }
    </>
  );
}

export default ComposantParent;
