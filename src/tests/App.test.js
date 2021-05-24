import { render, screen } from '@testing-library/react';
import App from '../App';

// Tests the App container renders without errors
test('renders App container without errors', () => {
  render(<App />);
  const headerElement = screen.getByText('Challenge');
  expect(headerElement).toBeInTheDocument();
});


  
// Tests the capitalizeFirstLetter returns a string with the first letter capitalized
test('Returns a string with the first letter capitalized', () => {
  expect(capitalizeFirstLetter('positive')).toBe('Positive');
});