import React from 'react';
// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

function computeTextStyle(color, bold) {
  return {
    fontWeight: bold ? 'bold' : 'normal',
    color: color || 'black',
  };
}

function Text({ todo, onCloseClick }) {
  return (
    <li style={computeTextStyle(todo.color, todo.bold)}>
      {todo.text}
      &nbsp;
      <button type="button" onClick={onCloseClick}><strong>X</strong></button>
    </li>
  );
}

Text.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    bold: PropTypes.bool.isRequired,
  }).isRequired,
  onCloseClick: PropTypes.func.isRequired,
};

export default observer(Text);
