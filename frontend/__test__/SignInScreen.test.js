import React from 'react';
import renderer from 'react-test-renderer';
import SignInScreen from '../screens/SignInScreen';

test('renders correctly', () => {
    const tree = renderer.create(<SignInScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });