import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import RootStore from './RootStore';
import FichePersonnePurReact from './FichePersonnePurReact';

function FichePersonneContainer() {
  const { p1 } = useContext(RootStore);
  return <FichePersonnePurReact prenom={p1.prenom} nom={p1.nom} />;
}

export default observer(FichePersonneContainer);
