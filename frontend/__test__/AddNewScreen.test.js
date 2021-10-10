import React from 'react';
import renderer from 'react-test-renderer';
import AddNewScreen from '../screens/AddNewScreen';

test('renders correctly', () => {
    const tree = renderer.create(<AddNewScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });