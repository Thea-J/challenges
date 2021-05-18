import Topics from './Topics';
import { render, screen } from '@testing-library/react';

// Tests the Topic container renders without errors
test('renders Topics component Cloud header', () => {
    render(<Topics />);
    const headerElement = screen.getByText('Topics Cloud');
    expect(headerElement).toBeInTheDocument();
});