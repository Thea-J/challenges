import React, { Component } from 'react';
import topicsObject from './brandwatch_challenge_docs/topics.json';
import Topics from './Topics';
import TopicMetadata from './TopicMetadata';
import './styles/App.css';
import logo from './bw_logo.png';

export class App extends Component {

  constructor(){
    super();
    this.state = {
      topicsObject : topicsObject,
      exposeMetadata : false,
      selectedTopic : {}
    }
  };

  selectTopic = (event) => {
    let topicId = event.target.id;
    let selectedTopic = topicsObject.topics.find((topicElement) => { return topicElement.id === topicId});
    this.setState({exposeMetadata: true , selectedTopic : selectedTopic})
  };

  //Given a string, return the string with the first letter capitalized
  capitalizeFirstLetter = (string) => {
    let arrayOfCharacters = string.split('');
    arrayOfCharacters[0] = arrayOfCharacters[0].toUpperCase();
    return arrayOfCharacters.join('');
  }; 

  render() {
    return (
      <div>
      <img src = {logo} alt = 'Brandwatch logo'/>
        <h1>
          <span id = 'blue'>My </span>
          <span id = 'pink'>Topics </span>
          <span id = 'yellow'>Challenge</span>
        </h1>
        <Topics topicsArray = {topicsObject.topics} handleTopicClick = {this.selectTopic}/>
        <TopicMetadata exposeMetadata = {this.state.exposeMetadata} selectedTopic = {this.state.selectedTopic} capitalizeFirstLetter = {this.capitalizeFirstLetter}/>
      </div>
    );
  };
}

export default App