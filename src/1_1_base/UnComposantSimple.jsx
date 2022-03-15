import React from 'react';
import PropTypes from 'prop-types';

function UnComposantSimple({ message }) {
  return (
    <h1>{message}</h1>
  );
}

UnComposantSimple.propTypes = {
  message: PropTypes.string.isRequired,
};

export default UnComposantSimple;
