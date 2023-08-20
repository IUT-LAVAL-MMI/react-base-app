import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import RootStore from './RootStore';

function ModifPersonne() {
  const { p1 } = useContext(RootStore);
  return (
    <div>
      <label htmlFor="modifPersonneNom">
        Nom :
        <input
          id="modifPersonneNom"
          type="text"
          value={p1.nom}
          onChange={(evt) => { p1.nom = evt.target.value; }}
        />
      </label>
      <label htmlFor="modifPersonnePrenom">
        Prénom :
        <input
          id="modifPersonnePrenom"
          type="text"
          value={p1.prenom}
          onChange={(evt) => { p1.prenom = evt.target.value; }}
        />
      </label>
    </div>
  );
}

export default observer(ModifPersonne);
