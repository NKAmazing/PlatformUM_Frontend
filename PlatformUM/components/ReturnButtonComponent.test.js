import React from 'react';
import renderer from 'react-test-renderer';
import ReturnButtonComponent from './ReturnButtonComponent';
import { testMessages } from '../Constants';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ goBack: jest.fn() }),
}));

test(testMessages.returnButton, () => {
  const tree = renderer.create(<ReturnButtonComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});