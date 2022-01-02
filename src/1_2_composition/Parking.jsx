/* eslint-disable react/prop-types */
import React from 'react';
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

export default Parking;
