import React, { Component } from 'react'
import topicsObject from './brandwatch_challenge_docs/topics.json'
import Topics from './Topics'

export class App extends Component {

  constructor(){
    super();
    this.state = {
      topicsObject : topicsObject
    }
  }

  render() {
    return (
      <div>
        <h1> My Topics Challenge </h1>
        <Topics topicsArray = {topicsObject.topics}/>
      </div>
    )
  }
}

export default App