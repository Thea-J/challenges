import React, { Component } from 'react'

export class Topics extends Component {

    //Given the topicsArray prop, render a list of all topic labels
    renderTopics = () => {
        return this.props.topicsArray.map((topicObject) => {
            return (
            <li key = {topicObject.id} > {topicObject.label} </li>
            )
        })
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
