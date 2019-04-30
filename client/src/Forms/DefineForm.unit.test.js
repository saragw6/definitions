import React from 'react';
import renderer from "react-test-renderer";
import DefineForm from './DefineForm';

test('Definition Form?', () => {
  const component = renderer.create(<DefineForm />);
  const jsonForm = component.toJSON();
  expect(jsonForm).toMatchSnapshot();
});
