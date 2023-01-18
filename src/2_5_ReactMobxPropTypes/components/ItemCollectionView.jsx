import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemView from './ItemView';
import RootStore from '../RootStore';

function ItemCollectionView() {
  console.log('RENDER: ItemCollectionView'); // eslint-disable-line no-console
  const { itemCol } = useContext(RootStore);

  return (
    <ListGroup>
      {
        itemCol.items.map((item) => (
          <ListGroup.Item key={item.id}>
            <ItemView item={item} />
          </ListGroup.Item>
        ))
      }
    </ListGroup>
  );
}

export default observer(ItemCollectionView);
