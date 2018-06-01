import React, { Component } from 'react';
import './App.css';

import ListOfNamesContainer from './Person/ListOfNamesContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListOfNamesContainer />
      </div>
    );
  }
}

export default App;
