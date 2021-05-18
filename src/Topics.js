import React, { Component } from 'react'
import './Topics.css';

export class Topics extends Component {

    //Given the topicsArray prop, render a list of all topic labels
    renderTopics = () => {
        return this.props.topicsArray.map((topicObject) => {
            return (
            <li key = {topicObject.id} 
            className = {[this.setTopicColor(topicObject.sentimentScore), this.setTopicSize(topicObject.sentimentScore)].join(' ')}>
                {topicObject.label} 
            </li>
            )
        })
    }

    //Given a sentimentScore, return a sting that will be set as a class value
    setTopicColor = (sentimentScore) => {
        if (sentimentScore > 60){
            return "highSentimentScore"
        }
        else if (sentimentScore < 40){
            return "lowSentimentScore"
        }
        else {
            return "midSentimentScore"
        }
    }

    //Given a sentimentScore, return a sting that will be set as a class value
    setTopicSize = (sentimentScore) => {
        if (sentimentScore >= 100){
            return "fontSizeSix"
        }
        else if (sentimentScore >=80 && sentimentScore <= 99){
            return "fontSizeFive"
        }
        else if (sentimentScore >=60 && sentimentScore <= 79){
            return "fontSizeFour"
        }
        else if (sentimentScore >=40 && sentimentScore <= 59){
            return "fontSizeThree"
        }
        else if (sentimentScore >=20 && sentimentScore <= 39){
            return "fontSizeTwo"
        }
        else {
            return "fontSizeOne"
        }
    }

    render() {
        return (
            <div>
                <h3> Topics Cloud </h3>
                <ul> {this.renderTopics()} </ul>
            </div>
        )
    }
}

Topics.defaultProps = { topicsArray : [] }

export default Topics
