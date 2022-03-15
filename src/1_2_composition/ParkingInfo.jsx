import React from 'react';
import PropTypes from 'prop-types';

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

ParkingInfo.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default ParkingInfo;
