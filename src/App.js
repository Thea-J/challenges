import React, { Component } from 'react'
import topicsObject from './brandwatch_challenge_docs/topics.json'
import Topics from './Topics'
import TopicMetadata from './TopicMetadata'

export class App extends Component {

  constructor(){
    super();
    this.state = {
      topicsObject : topicsObject
    }
  }

  selectTopic = (event) => {

  }

  render() {
    return (
      <div>
        <h1> My Topics Challenge </h1>
        <Topics topicsArray = {topicsObject.topics} handleTopicClick = {this.selectTopic}/>
        <TopicMetadata />
      </div>
    )
  }
}

export default App