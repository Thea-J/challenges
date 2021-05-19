// My plan on how to execute the requirements for the topics cloud challenge

// ---------------------------------- App Container
// Import topics.json & store in state of App.js ✅
// Render a topics container & pass topics.json file as props - This will render the topics cloud ✅
// Render a metadata container - This will render the metadata when a topic is clicked ✅


// ---------------------------------- Topics Container
// label property of each topic should be the 'word' in the word cloud ✅
// if sentiment score > 60 topic label is green ✅
// if sentiment score < 40 topic label is red ✅
// Other topics should be displayed in grey ✅

// Each topic should have one of 6 different text sizes: ✅
// The most popular topics largest, and least popular smallest ✅

// Possible refactor for setting size & colour is using a dictionary to store { sentimentScore: "AClassName" }
// Possible refactor store the setting functions in an array & pass the array to the className attr

// ---------------------------------- Metadata Container
// When a topic is clicked, metadata about the topic should be displayed: ✅

// In App define state of selectedTopic: {} & exposeMetadata: false ✅
// In App define a selectTopic event handler function & pass the function as props to Topics component ✅
// In Topic create a click event that invokes the selectTopic function & set an id attr to the id of the topic rendered ✅
// Pass  selectedTopic & exposeMetadata down to metadata as props ✅
// In  TopicMetadata, render the sentiment information ✅
// Positive - green, neutral - black and negative - red ✅

// Possible refactor metadata is capitalised 
// Possible refactor shorten this.props.sentiment to just sentiment somehow


// ---------------------------------- Additional features
// Documentation
// Mimic Brandwatch website, include logo & match company colours
// When a user hovers over a topic, it moves
// I added the most & least mentions array to the metadata because I thought as a company, I would want to know where most of my audience is talking about me - this would give me a good idea of where to advertise more / least

// ---------------------------------- Tests

// Render Logic:
// Does the component render without error ?
// Is the correct thing rendered ?

// All Conditionals
	
// All Events

// Edge cases

// Errors printed to the console? There should be none