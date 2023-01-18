import ItemCollection from './model/ItemCollection';

const STORE = {
  itemCol: new ItemCollection(),
};

STORE.itemCol.addItem('id1', 'Salut');
STORE.itemCol.addItem('id2', 'Poire');
STORE.itemCol.addItem('id3', 'Pomme');

export default STORE;
