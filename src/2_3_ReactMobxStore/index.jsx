import React from 'react';
import { action } from 'mobx';
import { createRoot } from 'react-dom/client';
import FichePersonneContainer from './FichePersonneContainer';
import ModifPersonne from './ModifPersonne';
import RootStore from './RootStore';
import STORE from './store';

const root = createRoot(document.getElementById('appMountPoint'));
root.render(
  <RootStore.Provider value={STORE}>
    <div>
      <FichePersonneContainer />
    </div>
    <div>
      <ModifPersonne />
    </div>
  </RootStore.Provider>,
);

setTimeout(action(() => {
  console.log('Changement !'); // eslint-disable-line no-console
  STORE.p1.nom = 'Luengo';
  STORE.p1.prenom = 'Vanda';
}), 3000);