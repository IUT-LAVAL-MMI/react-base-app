/* eslint-disable react/prop-types */
import React from 'react';
import { observer } from 'mobx-react';

function FichePersonne({ personne }) {
  return (
    <>
      <div>
        <span>
          Prenom:
          {personne.prenom}
        </span>
      </div>
      <div>
        <span>
          Nom:
          {personne.nom}
        </span>
      </div>
    </>
  );
}

export default observer(FichePersonne);
