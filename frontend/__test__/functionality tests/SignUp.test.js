import { render, fireEvent } from '@testing-library/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import App from '../../App';
import { renderWithContext } from '../helpers/renderWithContext';

test('signUp function stores user token', async () => {
  const newUser = {
    username: 'newUser',
    userToken: 'newToken',
  };

  const { getByTestId } = renderWithContext(<App />);

  const signUpButton = getByTestId('signUpButton'); 
  fireEvent.press(signUpButton);

  expect(AsyncStorage.setItem).toHaveBeenCalledWith('userToken', 'newToken');
});
