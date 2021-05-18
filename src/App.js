import React, { Component } from 'react'
import topicsObject from './brandwatch_challenge_docs/topics.json'

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
      </div>
    )
  }
}

export default App