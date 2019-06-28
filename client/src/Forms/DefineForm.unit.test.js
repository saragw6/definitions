import React from 'react';
import renderer from "react-test-renderer";
import DefineForm from './DefineForm';

jest.mock('../Pages/InputFormComponent', () => () => 'InputFormComponent(Mock)');

test('Definition Form?', () => {
  const component = renderer.create(<DefineForm />);
  const jsonForm = component.toJSON();
  expect(jsonForm).toMatchSnapshot();
});
