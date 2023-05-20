import { render, fireEvent } from '@testing-library/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../components/context';
import App from '../../App';
import { renderWithContext } from '../helpers/renderWithContext'; // This is a helper function you create to wrap your component with needed context

test('signIn function stores user token', async () => {
  const foundUser = {
    username: 'testUser',
    userToken: 'testToken',
  };

  const { getByTestId } = renderWithContext(<App />);

  const signInButton = getByTestId('signInButton'); 
  fireEvent.press(signInButton);

  expect(AsyncStorage.setItem).toHaveBeenCalledWith('userToken', 'testToken');
});
