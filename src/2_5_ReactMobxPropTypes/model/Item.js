import { makeAutoObservable } from 'mobx';

class Item {
  _id;

  _content;

  constructor(id, content = 'unknown') {
    makeAutoObservable(this);
    this._id = id;
    this.content = content;
  }

  get id() {
    return this._id;
  }

  get content() {
    return this._content;
  }

  set content(c) {
    this._content = c?.toString() ?? '';
  }

  reverse() {
    this._content = this._content.split('').reverse().join('');
  }
}

export default Item;
