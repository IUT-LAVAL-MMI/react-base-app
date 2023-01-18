import { makeAutoObservable } from 'mobx';
import Item from './Item';

class ItemCollection {
  _items = [];

  constructor() {
    makeAutoObservable(this);
  }

  get items() {
    return this._items;
  }

  addItem(id, content = 'unknown') {
    const item = new Item(id, content);
    this._items.push(item);
    return item;
  }
}

export default ItemCollection;
