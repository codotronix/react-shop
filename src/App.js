import React, { Component } from 'react';
import MainContainer from './components/MainContainer';
import Headbar from './components/Headbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Headbar/>
        <MainContainer />
      </div>
    );
  }
}

export default App;
