import React from 'react';
import renderer from 'react-test-renderer';
import Boop from './Boop';

it('works?', () => {
  const component = renderer.create(<Boop/>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});