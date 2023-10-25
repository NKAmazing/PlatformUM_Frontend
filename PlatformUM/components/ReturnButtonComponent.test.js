import React from 'react';
import renderer from 'react-test-renderer';
import ReturnButtonComponent from './ReturnButtonComponent';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ goBack: jest.fn() }),
}));

test('ReturnButtonComponent renders correctly', () => {
  const tree = renderer.create(<ReturnButtonComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});