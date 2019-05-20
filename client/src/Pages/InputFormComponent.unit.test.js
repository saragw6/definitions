import React from 'react';
import renderer from "react-test-renderer";
import InputForm from './InputFormComponent';

test('termRequest?', () => {
  const component = renderer.create(<InputForm labelInput="What term do you want defined?" isUnitTest={true} />);
  const jsonForm = component.toJSON();
  expect(jsonForm).toMatchSnapshot();

  const componentRequired = renderer.create(<InputForm labelInput="What term do you want defined?" isRequired={true} isUnitTest={true} />);
  const jsonFormRequired = componentRequired.toJSON();
  expect(jsonFormRequired).toMatchSnapshot();
});
