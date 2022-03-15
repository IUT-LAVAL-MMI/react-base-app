import React from 'react';

import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ToDoList from './ToDoList';

const BASE_ENTRIES = [{ text: 'e1', highlighted: false }, { text: 'e2', highlighted: true }, { text: 'e3', highlighted: false }];

let entries; // Entrées de test
let addEntry; // fonction d'ajout d'une entrée
let removeEntry; // fonction de suppression d'une entrée
let highlightEntry; // fonction de mise en valeur d'une entrée
let todoListComponent; //

beforeAll(() => {
  addEntry = jest.fn((text) => { entries.push({ text, highlighted: false }); });
  removeEntry = jest.fn((i) => {
    if (i < 0 || i >= entries.length) {
      throw new Error('Wrong remove indix');
    }
    entries.splice(i, 1);
  });
  highlightEntry = jest.fn((i) => {
    if (i < 0 || i >= entries.length) {
      throw new Error('Wrong highlightEntry indix');
    }
    entries[i].highlighted = !entries[i].highlighted;
  });
});

beforeEach(() => {
  entries = JSON.parse(JSON.stringify(BASE_ENTRIES));
  addEntry.mockClear();
  removeEntry.mockClear();
  highlightEntry.mockClear();
  todoListComponent = shallow(
    <ToDoList
      entries={entries}
      addEntry={addEntry}
      removeEntry={removeEntry}
      highlightEntry={highlightEntry}
    />,
  );
});

afterEach(() => {
  entries = [];
});

it('Avec les même props, la todolist ne change pas.', () => {
  expect(toJson(todoListComponent)).toMatchSnapshot();
});

it("La todolist expose les bonnes entrées, dans l'ordre.", () => {
  expect(todoListComponent.find('ul > li.todoListEntry')).toHaveLength(entries.length);
  todoListComponent.find('ul > li.todoListEntry').forEach((node, i) => {
    expect(node.find('span').at(0).text()).toBe(entries[i].text);
    expect(node.hasClass('highlighted')).toBe(entries[i].highlighted);
  });
});

it("Le highlight d'une entrée doit positionner la classe highlighted.", () => {
  entries[2].highlighted = false;
  todoListComponent.setProps({ entries });
  expect(todoListComponent.find('ul > li.todoListEntry').at(2).hasClass('highlighted')).toBeFalsy();
  entries[2].highlighted = true;
  todoListComponent.setProps({ entries });
  expect(todoListComponent.find('ul > li.todoListEntry').at(2).hasClass('highlighted')).toBeTruthy();
  expect(toJson(todoListComponent)).toMatchSnapshot();
});

it("La validation du formulaire ne recharge pas la page quelque soit l'état de champs de texte.", () => {
  const mockedEvent = { preventDefault: jest.fn() };
  todoListComponent.setState({ currentText: '' });
  todoListComponent.find('form > button').simulate('click', mockedEvent);
  todoListComponent.setState({ currentText: 'aaaaaaaa' });
  todoListComponent.find('form > button').simulate('click', mockedEvent);
  expect(mockedEvent.preventDefault.mock.calls).toHaveLength(2);
});

it('La validation du formulaire ne fonctionne que si du texte a été saisi, sans prendre en compte les espaces de début et de fin.', () => {
  const mockedEvent = { preventDefault: () => {} };
  const nbBaseEntries = entries.length;
  const testText = 'Hello les petits';
  todoListComponent.setState({ currentText: '    ' });
  todoListComponent.find('form > button').simulate('click', mockedEvent);
  todoListComponent.setState({ currentText: `   ${testText}     ` });
  todoListComponent.find('form > button').simulate('click', mockedEvent);
  expect(addEntry.mock.calls).toHaveLength(1);
  expect(addEntry.mock.calls[0][0]).toBe(testText);
  expect(todoListComponent.find('ul > li.todoListEntry')).toHaveLength(nbBaseEntries + 1);
  expect(toJson(todoListComponent)).toMatchSnapshot();
});

it("La suppression d'une entrée via l'interface supprime la bonne entrée.", () => {
  const nbBaseEntries = entries.length;
  const idxDelete = 1;
  const txtDelete = entries[idxDelete].text;
  todoListComponent.find('ul > li.todoListEntry .closeBtn').at(idxDelete).simulate('click');
  expect(removeEntry.mock.calls).toHaveLength(1);
  expect(removeEntry.mock.calls[0][0]).toBe(idxDelete);
  expect(entries).toHaveLength(nbBaseEntries - 1);
  expect(entries.filter((e) => e.text === txtDelete)).toHaveLength(0);
  expect(toJson(todoListComponent)).toMatchSnapshot();
});

it("La mise en valeur d'une entrée via l'interface met en valeur la bonne entrée.", () => {
  const idxHighlighted = 0;
  todoListComponent.find('ul > li.todoListEntry .highlightBtn').at(idxHighlighted).simulate('click');
  expect(highlightEntry.mock.calls).toHaveLength(1);
  expect(highlightEntry.mock.calls[0][0]).toBe(idxHighlighted);
  expect(entries[idxHighlighted].highlighted).toBeTruthy();
  expect(toJson(todoListComponent)).toMatchSnapshot();
});
