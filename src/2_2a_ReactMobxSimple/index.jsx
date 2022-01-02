import React from 'react';
import { action } from 'mobx';
import { render } from 'react-dom';
import Personne from './Personne';
import FichePersonne from './FichePersonne';
import ModifPersonne from './ModifPersonne';

const p1 = new Personne('Élise', 'Lavoué');

render(
  <>
    <div>
      <FichePersonne personne={p1} />
    </div>
    <div>
      <ModifPersonne personne={p1} />
    </div>
  </>,
  document.getElementById('appMountPoint'),
);

setTimeout(action(() => {
  console.log('Changement !'); // eslint-disable-line no-console
  p1.nom = 'Luengo';
  p1.prenom = 'Vanda';
}), 3000);
