import { render, fireEvent } from '@testing-library/react-native';
import App from '../../App';
import { renderWithContext } from '../helpers/renderWithContext';

test('toggleTheme function changes the theme', () => {
  const { getByTestId } = renderWithContext(<App />);

  const themeToggleButton = getByTestId('themeToggleButton'); 
  fireEvent.press(themeToggleButton);

  // Here you'll want to test if the theme has actually changed. 
  // You could do this by checking some part of your app that changes based on the theme.
});
