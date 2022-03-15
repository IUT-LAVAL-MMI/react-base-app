import React from 'react';
// import PropTypes from 'prop-types';
import ColorContext from './ColorContext';
import Menu from './Menu';

const COLOR_STORE = {
  color: 'yellow',
  backgroundColor: 'grey',
};

function ComposantBase() {
  return (
    <ColorContext.Provider value={COLOR_STORE}>
      <Menu />
    </ColorContext.Provider>
  );
}

export default ComposantBase;
