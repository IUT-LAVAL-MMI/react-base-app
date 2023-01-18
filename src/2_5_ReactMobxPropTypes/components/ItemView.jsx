import React from 'react';
import PropTypes from 'prop-types';
import { observer, PropTypes as MobXPT } from 'mobx-react';
import Button from 'react-bootstrap/Button';

function ItemView({ item }) {
  console.log(`RENDER: ItemView of ${item.id}`); // eslint-disable-line no-console
  return (
    <>
      <span>{item.content}</span>
      <Button
        className="ms-1"
        size="sm"
        variant="success"
        onClick={() => item.reverse()}
      >
        &lt;-&gt;
      </Button>
    </>
  );
}

// Mauvais choix pour les performance en mode dev
// ItemView.propTypes = {
//   item: PropTypes.shape({
//     id: PropTypes.string,
//     content: PropTypes.string,
//     reverse: PropTypes.func,
//   }).isRequired,
// };

// Bon choix pour les performances en mode dev
ItemView.propTypes = {
  item: MobXPT.observableObject.isRequired,
};

export default observer(ItemView);
