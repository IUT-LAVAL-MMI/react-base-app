import React from 'react';
import PropTypes from 'prop-types';

function FichePersonnePurReact({ prenom, nom }) {
  return (
    <>
      <div>
        <span>
          Prenom:&nbsp;
          {prenom}
        </span>
      </div>
      <div>
        <span>
          Nom:&nbsp;
          {nom}
        </span>
      </div>
    </>
  );
}

FichePersonnePurReact.propTypes = {
  prenom: PropTypes.string.isRequired,
  nom: PropTypes.string.isRequired,
};

export default FichePersonnePurReact;
