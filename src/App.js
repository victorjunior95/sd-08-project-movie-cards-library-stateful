import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieLibrary movies={ () => ['oi', 'como vai?'] } />
      </div>
    );
  }
}
