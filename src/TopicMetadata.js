import React, { Component } from 'react'
import './styles/TopicMetadata.css';

export class TopicMetadata extends Component {

    renderSentimentBreakdown = (sentiment) => {
        let sentimentArray = Object.keys(sentiment).reverse()
        return sentimentArray.map ((sentimentType) => {
            return  (<dd key = {sentimentType} className = {sentimentType}> {sentimentType} Mentions: {sentiment[sentimentType]} </dd>)
        })
    }

    render() {
        if (this.props.exposeMetadata){
            return(
                <div id = 'metadata'>
                 <h3> {this.props.selectedTopic.label} Sentiment Breakdown </h3>
                 <p>Total Mentions: {this.props.selectedTopic.volume} </p>
                {this.renderSentimentBreakdown(this.props.selectedTopic.sentiment)} 
                </div>
            )
        }
        return (
            <div>
                {/* <h3> Topic Metadata </h3> */}
            </div>
        )
    }
}

export default TopicMetadata
