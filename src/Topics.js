import React, { Component } from 'react'
import './Topics.css';

export class Topics extends Component {

    //Given the topicsArray prop, render a list of all topic labels
    renderTopics = () => {
        return this.props.topicsArray.map((topicObject) => {
            return (
            <li key = {topicObject.id} 
            className = {this.setTopicClass(topicObject.sentimentScore)}> 
                {topicObject.label} 
            </li>
            )
        })
    }

    //Given a sentimentScore, return a sting that will be set as a class value
    setTopicClass = (sentimentScore) => {
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
