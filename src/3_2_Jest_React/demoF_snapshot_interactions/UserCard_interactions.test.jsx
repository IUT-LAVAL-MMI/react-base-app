import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import UserCard from './UserCard';

/* Pour MAJ Snap : npm run test UserCard -- -u  */

let testedComponent; //

beforeEach(() => {
  testedComponent = shallow(
    <UserCard
      firstname="Jules"
      lastname="Guedes"
      birthdate="10/09/1953"
      location="Tours"
    />,
  );
});

it('Changement de props re-render correctement', () => {
  expect(toJson(testedComponent)).toMatchSnapshot();

  testedComponent.setProps({
    firstname: 'Anne',
    lastname: 'Urla',
    birthdate: '27/02/1984',
    location: undefined,
  });
  expect(toJson(testedComponent)).toMatchSnapshot();
  expect(testedComponent.find('.card-header').at(0).text()).toMatch(/^Anne\sUrla$/);
  expect(testedComponent.find('.card-body .col').at(0).text()).toMatch(/^Birthdate:\s27\/02\/1984$/);
  expect(testedComponent.find('.card-body .col').at(1).text()).toMatch(/^Location:\sunknown$/);
});

it('Click sur bouton provoque changement de state', () => {
  Date.now = jest.fn(() => 1482363367071); // On "fixe" la date fournie par Date.now()

  expect(testedComponent.find('.card-footer button').hasClass('active')).toBeFalsy();
  expect(testedComponent.find('.card-footer .col').at(0).text()).toMatch(/^Last selection:\saucune$/);
  testedComponent.find('.card-footer button').simulate('click');
  expect(testedComponent.find('.card-footer button').hasClass('active')).toBeTruthy();
  expect(testedComponent.find('.card-footer .col').at(0).text()).toMatch(/^Last selection:\s1482363367071$/);
});
