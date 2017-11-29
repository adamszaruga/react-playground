import React, { Component } from 'react';
import './App.css';

var searchResults = [
	{
		title: "dark knight"
	},
	{
		title: "dork knight"
	},
	{
		title: "dark night"
	}
]


var inputStyle = {
	width: "300px"
}

let SearchResult = (props) => {
	return <p>{props.title}</p>
}


let App = ()=>{
  var arrayOfSearchElements = [];
  for (var i=0; i<searchResults.length; i++ ) {
  	arrayOfSearchElements.push(<SearchResult title={searchResults[i].title}/>)
  }

  return (
  	<div>
	  	<input style={inputStyle} />
	  	<hr />
	  	{arrayOfSearchElements}
  	</div>
  )
}

export default App;
