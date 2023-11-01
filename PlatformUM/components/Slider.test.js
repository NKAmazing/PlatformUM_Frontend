import React from 'react';
import renderer from 'react-test-renderer';
import Slider from './Slider';
import { testMessages } from '../Constants';


test(testMessages.slider, () => {
  const tree = renderer.create(<Slider />).toJSON();
  expect(tree).toMatchSnapshot();
});
