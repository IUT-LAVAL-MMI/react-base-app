import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

function FichePersonne({ personne }) {
  return (
    <>
      <div>
        <span>
          Prenom:&nbsp;
          {personne.prenom}
        </span>
      </div>
      <div>
        <span>
          Nom:&nbsp;
          {personne.nom}
        </span>
      </div>
    </>
  );
}

FichePersonne.propTypes = {
  personne: PropTypes.shape({
    prenom: PropTypes.string,
    nom: PropTypes.string,
  }).isRequired,
};

export default observer(FichePersonne);
