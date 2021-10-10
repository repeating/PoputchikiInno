import React from 'react';
import renderer from 'react-test-renderer';
import SearchScreen from '../screens/SearchScreen';

test('renders correctly', () => {
    const tree = renderer.create(<SearchScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });