import React from 'react';
import PropTypes from 'prop-types';

function Voiture({ name, color }) {
  return (
    <div>
      <span className="bold">{name}</span>
      <span className="small">
        Couleur:&nbsp;
        {color}
      </span>
    </div>
  );
}

Voiture.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Voiture;
