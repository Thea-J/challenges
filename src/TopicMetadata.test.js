import TopicMetadata from './TopicMetadata';
import { render, screen } from '@testing-library/react';
import topicsObject from './brandwatch_challenge_docs/topics.json';

// Tests the TopicMetadata container renders without errors
test('renders TopicMetadata component header', () => {
    render(<TopicMetadata />);
    const headerElement = screen.getByText('Topic Metadata');
    expect(headerElement).toBeInTheDocument();
});

// Tests conditional rendering occurs when a topic is clicked
test('conditionally renders Topic Metadata when a topic is clicked', () => {
    render(<TopicMetadata exposeMetadata = {true} selectedTopic = {topicsObject.topics[1]} />);
    const listElement = screen.getByText(`${topicsObject.topics[1].label} Sentiment Breakdown`);
    expect(listElement).toBeInTheDocument();
});