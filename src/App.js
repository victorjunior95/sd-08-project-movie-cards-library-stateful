import React, { Component } from 'react';
import MovieLibrary from './components/MovieLibrary';
import './App.css';

import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieLibrary />
      </div>
    );
  }
}

export default App;
