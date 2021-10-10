import React from 'react';
import renderer from 'react-test-renderer';
import SplashScreen from '../screens/SplashScreen';

test('renders correctly', () => {
    const tree = renderer.create(<SplashScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });