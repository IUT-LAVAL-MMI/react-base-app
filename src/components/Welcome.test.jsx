import React from 'react';
import renderer from 'react-test-renderer';
import Welcome from './Welcome';

it('Le Welcome ne change pas', () => {
  global.APP_ENV_APP_TITLE = 'appTitle';

  const component = renderer.create(
    <Welcome />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
