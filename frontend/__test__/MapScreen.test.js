import React from 'react';
import renderer from 'react-test-renderer';
import MapScreen from '../screens/MapScreen';

test('renders correctly', () => {
    const tree = renderer.create(<MapScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });