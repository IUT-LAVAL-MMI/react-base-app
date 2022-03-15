import React from 'react';
import PropTypes from 'prop-types';
import BaseDemo from './1_1_base/UnComposantSimple';
import CompoDemo from './1_2_composition/Parking';
import StateDemo from './1_3a_state/Compteur';
import ReducerDemo from './1_3b_reducer/FormulaireComplexe';
import ContextDemo from './1_4_context/ComposantBase';
import EffectDemo from './1_5_effect/ComposantParent';

import style from './App.scss';

function DemoWrapper({ title, children }) {
  return (
    <div className={style.demoWrapper}>
      <h3>{title}</h3>
      <hr />
      { children }
    </div>
  );
}

DemoWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

function App() {
  const demoComponents = [
    ['Composant simple', <BaseDemo message="Coucou" />],
    ['Démonstration de composition', <CompoDemo
      nom="Brisson"
      adresse="Rennes"
      voitures={[
        { id: 1, nom: 'Berline', color: 'rouge' },
        { id: 2, nom: 'Limousine', color: 'grise' },
      ]}
    />],
    ['Démonstration de state', <StateDemo />],
    ['Démonstration de reducer', <ReducerDemo longueurInit={20} largeurInit={30} />],
    ['Démonstration de context', <ContextDemo />],
    ["Démonstration d'effect", <EffectDemo />],
  ];

  return (
    <>
      {
        demoComponents.map(([title, component]) => (
          <DemoWrapper key={title} title={title}>
            {component}
          </DemoWrapper>
        ))
      }
    </>
  );
}

export default App;
