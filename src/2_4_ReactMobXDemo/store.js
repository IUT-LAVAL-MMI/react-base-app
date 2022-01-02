import TodoList from './model/TodoList';
import FryManager from './model/FryManager';

const STORE = {
  todoList: new TodoList(),
  fryMgr: new FryManager(),
};

export default STORE;
