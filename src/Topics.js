import React, { Component } from 'react';
import './styles/Topics.css';

export class Topics extends Component {

    //Given the topicsArray prop, render a list of all topic labels
    renderTopics = () => {
        return this.props.topicsArray.map((topicObject) => {
            return (
            <dt key = {topicObject.id} 
            id = {topicObject.id} 
            className = {[this.setTopicColor(topicObject.sentimentScore), this.setTopicSize(topicObject.volume)].join(' ')}
            onClick = {this.props.handleTopicClick} > 
                {topicObject.label} 
            </dt>
            );
        });
    };

    //Given a sentimentScore, return a sting that will be set as a class value
    setTopicColor = (sentimentScore) => {
        if (sentimentScore > 60){
            return "highSentimentScore";
        }
        else if (sentimentScore < 40){
            return "lowSentimentScore";
        }
        else {
            return "midSentimentScore";
        };
    };

    //Given a volume, return a sting that will be set as a class value
    setTopicSize = (volume) => {
        if (volume >= 50){
            return "fontSizeSix";
        }
        else if (volume >=40 && volume <= 49){
            return "fontSizeFive";
        }
        else if (volume >=30 && volume <= 39){
            return "fontSizeFour";
        }
        else if (volume >=20 && volume <= 29){
            return "fontSizeThree";
        }
        else if (volume >=10 && volume <= 19){
            return "fontSizeTwo";
        }
        else {
            return "fontSizeOne";
        };
    };

    render() {
        return (
            <div>
                <h3 id = "topics" > Select A Topic For More Details </h3>
                <dl> {this.renderTopics()} </dl>
            </div>
        );
    };
}

Topics.defaultProps = { topicsArray : [] };

export default Topics
