import React from 'react';
import renderer from 'react-test-renderer';
import Map from '../components/Map'

test('renders correctly', () => {
    const tree = renderer.create(<Map />).toJSON();
    expect(tree).toMatchSnapshot();
  });