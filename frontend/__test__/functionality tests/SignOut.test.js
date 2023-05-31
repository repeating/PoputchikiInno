import { render, fireEvent } from '@testing-library/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import App from '../../App';
import { renderWithContext } from '../helpers/renderWithContext';

test('signOut function removes user token', async () => {
  const { getByTestId } = renderWithContext(<App />);

  const signOutButton = getByTestId('signOutButton'); 
  fireEvent.press(signOutButton);

  expect(AsyncStorage.removeItem).toHaveBeenCalledWith('userToken');
});
