import React from 'react';
import { action } from 'mobx';
import { render } from 'react-dom';
import FichePersonneContainer from './FichePersonneContainer';
import ModifPersonne from './ModifPersonne';
import RootStore from './RootStore';
import STORE from './store';

render(
  <RootStore.Provider value={STORE}>
    <div>
      <FichePersonneContainer />
    </div>
    <div>
      <ModifPersonne />
    </div>
  </RootStore.Provider>,
  document.getElementById('appMountPoint'),
);

setTimeout(action(() => {
  console.log('Changement !'); // eslint-disable-line no-console
  STORE.p1.nom = 'Luengo';
  STORE.p1.prenom = 'Vanda';
}), 3000);
