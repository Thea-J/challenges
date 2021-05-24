import Topics from '../Topics';
import { render, screen, fireEvent } from '@testing-library/react';
import topicsObject from '../brandwatch_challenge_docs/topics.json';

// Tests the Topic container renders without errors
test('renders Topics component Cloud header', () => {
    render(<Topics />);
    const headerElement = screen.getByText('Select A Topic For More Details');
    expect(headerElement).toBeInTheDocument();
});

// Tests Topics props renders correctly on the screen
test ('renders Topic Component with the topicsArray prop', () => {
    const renderTopics = render(<Topics topicsArray = {topicsObject.topics}/>);
    const findTopicLabel = renderTopics.getByText(topicsObject.topics[0].label);
    expect(findTopicLabel).toBeTruthy;
});

// Tests Topics color is determined by sentimentScore
test ('renders each topic text color based on its sentimentScore', () => {
    render(<Topics topicsArray = {topicsObject.topics}/>);
    const listElement = screen.getByText('Berlin');
    expect(listElement).toHaveClass('highSentimentScore');
    // expect(listElement).toHaveStyle({color: 'green'})
});

// Tests Topics size is determined by sentimentScore
test ('renders each topic text size based on its sentimentScore', () => {
    render(<Topics topicsArray = {topicsObject.topics}/>);
    const listElement = screen.getByText('Hammered');
    expect(listElement).toHaveClass('fontSizeTwo');
});

//Tests the onClick event handler is fired when a topic is clicked
test('when a topic is clicked, the selectTopic event handler is fired', () => {
    const selectTopic = jest.fn();
    render(<Topics topicsArray = {topicsObject.topics} handleTopicClick = {selectTopic} />);
    const listElement = screen.getByText('Berlin');
    fireEvent.click(listElement);
    expect(selectTopic).toBeCalled();
});