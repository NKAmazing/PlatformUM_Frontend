import React from 'react';
import renderer from 'react-test-renderer';
import Slider from './Slider';


test('Slider component renders correctly', () => {
  const tree = renderer.create(<Slider />).toJSON();
  expect(tree).toMatchSnapshot();
});
