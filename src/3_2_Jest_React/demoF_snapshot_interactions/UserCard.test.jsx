import React from 'react';
import renderer from 'react-test-renderer';

import UserCard from './UserCard';

/* Pour MAJ Snap : npm run test UserCard -- -u  */

it('Render correctement', () => {
  const component = renderer.create(<UserCard
    firstname="Jean"
    lastname="Paul"
    birthdate="27/11/1987"
    location="Tours"
  />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
