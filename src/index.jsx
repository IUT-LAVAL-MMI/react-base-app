/* eslint-disable no-unused-vars */
// A utiliser pour les supports 1_1 à 1_5
// A commenter pour les supports 2_1 à 2_4

import React from 'react';
import { createRoot } from 'react-dom/client';

import Composant11 from './1_1_base/UnComposantSimple';
import Composant12 from './1_2_composition/Parking';
import Composant13a1 from './1_3a_state/Compteur';
import Composant13a2 from './1_3a_state/SaisieTextesState';
import Composant13b from './1_3b_reducer/FormulaireComplexe';
import Composant14 from './1_4_context/ComposantBase';
import Composant151 from './1_5_effect/ComposantParent';
import Composant152 from './1_5_effect/LogSystematique';
import Composant153 from './1_5_effect/LogMontageDemontage';

import './bootstrap-config.scss';

const root = createRoot(document.getElementById('appMountPoint'));

root.render(<Composant11 message="Coucou" />);

/* root.render(<Composant12
  nom="Parking Tours"
  adresse="rue Nationale"
  voitures={[
    { id: 'v1', nom: 'pigeot 207', color: 'red' },
    { id: 'v2', nom: 'renault xantia', color: 'green' },
  ]}
/>); */

// root.render(<Composant13a1 />);

// root.render(<Composant13a2 />);

// root.render(<Composant13b longueurInit={100} largeurInit={50} />);

// root.render(<Composant14 />);

// root.render(<Composant151 />);

// root.render(<Composant152 />);

// root.render(<Composant153 />);

// A utiliser pour les supports

// import './2_1a_PureMobX/index';

// import './2_1b_PureMobXSimplifie/index';

// import './2_2a_ReactMobxSimple/index';

// import './2_3_ReactMobxStore/index';

// import './2_4_ReactMobXDemo/index';
