import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import RootStore from '../../RootStore';

function FormattingTools() {
  const { todoList } = useContext(RootStore);

  return (
    <div>
      <button
        type="button"
        onClick={() => todoList.switchBold()}
        style={{ fontWeight: todoList.bold ? 'bold' : 'normal' }}
      >
        Gras
      </button>
      Couleur:
      {' '}
      <input
        type="color"
        value={todoList.color}
        onChange={(e) => { todoList.color = e.target.value; }}
      />
    </div>
  );
}

export default observer(FormattingTools);
