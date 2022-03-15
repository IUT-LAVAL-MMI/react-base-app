/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import Text from './Text';
import RootStore from '../../RootStore';

function TextsList() {
  const { todoList } = useContext(RootStore);
  return (
    <ul>
      {todoList.texts.map((todo, index) => (
        <Text
          key={index}
          todo={todo}
          onCloseClick={() => todoList.removeText(index)}
        />
      ))}
    </ul>
  );
}

export default observer(TextsList);
