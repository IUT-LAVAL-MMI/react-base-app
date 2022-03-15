import React from 'react';
import PropTypes from 'prop-types';
import ParkingInfo from './ParkingInfo';
import Voiture from './Voiture';

function Parking({ nom, adresse, voitures }) {
  return (
    <>
      <ParkingInfo name={nom} location={adresse} />
      {
        voitures.map((voiture) => (
          <Voiture
            key={voiture.id}
            name={voiture.nom}
            color={voiture.color}
          />
        ))
      }
    </>
  );
}

Parking.propTypes = {
  nom: PropTypes.string.isRequired,
  adresse: PropTypes.string.isRequired,
  voitures: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    color: PropTypes.string,
  })),
};

Parking.defaultProps = {
  voitures: [],
};

export default Parking;
