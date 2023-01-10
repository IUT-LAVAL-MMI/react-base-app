import React, { useRef, useContext } from 'react';
import { observer } from 'mobx-react';
import RootStore from '../../RootStore';

function InputArea() {
  const { todoList } = useContext(RootStore);
  const input = useRef(null);

  const submitNewText = (event) => {
    event.preventDefault();
    if (input.current === null) {
      return;
    }
    const inputContent = input.current.value.trim();
    if (!inputContent) {
      return;
    }
    todoList.addText(inputContent);
    input.current.value = '';
  };

  return (
    <form onSubmit={submitNewText}>
      <input ref={input} />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default observer(InputArea);
