import { makeAutoObservable } from 'mobx';

class TodoList {
  _texts = [];

  _color = 'black';

  _bold = false;

  constructor() {
    makeAutoObservable(this);
  }

  get texts() {
    return this._texts;
  }

  addText(text) {
    this._texts.push({ text, color: this.color, bold: this.bold });
  }

  removeText(idxText) {
    this.texts.splice(idxText, 1);
  }

  get color() {
    return this._color;
  }

  set color(color) {
    this._color = color;
  }

  get bold() {
    return this._bold;
  }

  switchBold() {
    this._bold = !this._bold;
  }
}

export default TodoList;
