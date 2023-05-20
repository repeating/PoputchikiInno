import React from 'react';
import { render } from '@testing-library/react-native';
import Map from '../../components/Map';

describe('Map', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Map />);

    const map = getByTestId('map');
    expect(map.props.region).toEqual({
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    });
  });
});
