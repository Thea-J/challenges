import React, { Component } from 'react'

export class TopicMetadata extends Component {

    renderSentimentBreakdown = (sentiment) => {
        let sentimentArray = Object.keys(sentiment).reverse()
        return sentimentArray.map ((sentimentType) => {
            return  (<dd key = {sentimentType}> {sentimentType} Mentions: {sentiment[sentimentType]} </dd>)
        })
    }

    render() {
        if (this.props.exposeMetadata){
            return(
                <div>
                 <h3> {this.props.selectedTopic.label} Sentiment Breakdown </h3>
                 <p>Total Mentions: {this.props.selectedTopic.volume} </p>
                {this.renderSentimentBreakdown(this.props.selectedTopic.sentiment)} 
                </div>
            )
        }
        return (
            <div>
                <h3> Topic Metadata </h3>
            </div>
        )
    }
}

export default TopicMetadata
