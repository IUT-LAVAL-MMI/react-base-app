/* eslint no-param-reassign: ["error", { "props": false }] */
/* eslint-disable react/prop-types */
import React from 'react';
import { observer } from 'mobx-react';

function ModifPersonne({ personne }) {
  return (
    <div>
      <label htmlFor="modifPersonneNom">
        Nom :
        <input
          id="modifPersonneNom"
          type="text"
          value={personne.nom}
          onChange={(evt) => { personne.nom = evt.target.value; }}
        />
      </label>
      <label htmlFor="modifPersonnePrenom">
        Prénom :
        <input
          id="modifPersonnePrenom"
          type="text"
          value={personne.prenom}
          onChange={(evt) => { personne.prenom = evt.target.value; }}
        />
      </label>
    </div>
  );
}

export default observer(ModifPersonne);
