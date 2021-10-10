import React from 'react';
import renderer from 'react-test-renderer';
import TripScreen from '../screens/TripsScreen';

test('renders correctly', () => {
    const tree = renderer.create(<TripScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });