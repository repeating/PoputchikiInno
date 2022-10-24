jest.useFakeTimers()
import React from 'react';
import renderer from 'react-test-renderer';
import AboutUsScreen from '../screens/AboutUsScreen';

test('renders correctly', () => {
    const tree = renderer.create(<AboutUsScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });