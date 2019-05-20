import React from 'react';
import renderer from "react-test-renderer";
import RequestForm from './RequestForm';

test('Request Form?', () => {
  const component = renderer.create(<RequestForm isUnitTest={true} />);
  const jsonForm = component.toJSON();
  expect(jsonForm).toMatchSnapshot();
});
