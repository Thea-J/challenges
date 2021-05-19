import React, { Component } from 'react'

export class TopicMetadata extends Component {
    render() {
        if (this.props.exposeMetadata){
            return(
                <div>
                 <h3> {this.props.selectedTopic.label} Sentiment Breakdown </h3>
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
