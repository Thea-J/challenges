import React, { Component } from 'react';
import topicsObject from './brandwatch_challenge_docs/topics.json';
import Topics from './Topics';
import TopicMetadata from './TopicMetadata';

export class App extends Component {

  constructor(){
    super();
    this.state = {
      topicsObject : topicsObject,
      exposeMetadata : false,
      selectedTopic : {}
    }
  }

  selectTopic = (event) => {
    let topicId = event.target.id
    let selectedTopic = topicsObject.topics.find((topicElement) => { return topicElement.id === topicId})
    this.setState({exposeMetadata: true , selectedTopic : selectedTopic})
  }

  render() {
    return (
      <div>
        <h1> My Topics Challenge </h1>
        <Topics topicsArray = {topicsObject.topics} handleTopicClick = {this.selectTopic}/>
        <TopicMetadata exposeMetadata = {this.state.exposeMetadata} selectedTopic = {this.state.selectedTopic} />
      </div>
    )
  }
}

export default App