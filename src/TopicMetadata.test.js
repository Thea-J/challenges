import TopicMetadata from './TopicMetadata';
import { render, screen } from '@testing-library/react';

// Tests the TopicMetadata container renders without errors
test('renders TopicMetadata component header', () => {
    render(<TopicMetadata />);
    const headerElement = screen.getByText('Topic Metadata');
    expect(headerElement).toBeInTheDocument();
});