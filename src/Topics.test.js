import Topics from './Topics';
import { render, screen } from '@testing-library/react';
import topicsObject from './brandwatch_challenge_docs/topics.json'

// Tests the Topic container renders without errors
test('renders Topics component Cloud header', () => {
    render(<Topics />);
    const headerElement = screen.getByText('Topics Cloud');
    expect(headerElement).toBeInTheDocument();
});

// Tests Topics props renders correctly on the screen
test ('renders Topic Component with the topicsArray prop', () => {
    const renderTopics = render(<Topics topicsArray = {topicsObject.topics}/>);
    const findTopicLabel = renderTopics.getByText(topicsObject.topics[0].label)
    expect(findTopicLabel).toBeTruthy;
});