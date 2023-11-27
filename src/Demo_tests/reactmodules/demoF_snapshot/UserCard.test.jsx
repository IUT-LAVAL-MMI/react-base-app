import React from 'react';
import renderer from 'react-test-renderer';
import UserCard from './UserCard';

/* Pour MAJ Snap : npm run test UserCard -- -u  */

it('Render correctement', () => {
  Date.now = jest.fn(() => 1482363367071);
  const component = renderer.create(<UserCard
    firstname="Jean"
    lastname="Paul"
    birthdate="27/11/1987"
    location="Tours"
  />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  component.getInstance().switchUserSelection();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
