/* eslint no-param-reassign: ["error", { "props": false }] */
/* eslint-disable react/prop-types */
import React from 'react';
import { observer } from 'mobx-react';

function ModifPersonne({ personne }) {
  return (
    <div>
      <label>
        Nom :
        <input
          type="text"
          value={personne.nom}
          onChange={(evt) => { personne.nom = evt.target.value; }}
        />
      </label>
      <label>
        Prénom :
        <input
          type="text"
          value={personne.prenom}
          onChange={(evt) => { personne.prenom = evt.target.value; }}
        />
      </label>
    </div>
  );
}

export default observer(ModifPersonne);
