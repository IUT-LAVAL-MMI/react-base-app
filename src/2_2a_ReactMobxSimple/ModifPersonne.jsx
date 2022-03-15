/* eslint no-param-reassign: ["error", { "props": false }] */
import React from 'react';
import PropTypes from 'prop-types';
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

ModifPersonne.propTypes = {
  personne: PropTypes.shape({
    prenom: PropTypes.string,
    nom: PropTypes.string,
  }).isRequired,
};

export default observer(ModifPersonne);
