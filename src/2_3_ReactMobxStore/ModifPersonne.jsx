import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import RootStore from './RootStore';

function ModifPersonne() {
  const { p1 } = useContext(RootStore);
  return (
    <div>
      <label>
        Nom :
        <input
          type="text"
          value={p1.nom}
          onChange={(evt) => { p1.nom = evt.target.value; }}
        />
      </label>
      <label>
        Prénom :
        <input
          type="text"
          value={p1.prenom}
          onChange={(evt) => { p1.prenom = evt.target.value; }}
        />
      </label>
    </div>
  );
}

export default observer(ModifPersonne);
