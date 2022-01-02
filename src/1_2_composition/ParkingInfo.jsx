/* eslint-disable react/prop-types */
import React from 'react';

function ParkingInfo({ name, location }) {
  return (
    <h3>
      {name}
      {' '}
      (
      {location}
      )
    </h3>
  );
}

export default ParkingInfo;
