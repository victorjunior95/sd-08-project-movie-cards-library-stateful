import React, { Component } from 'react';
import SearchBar from './SearchBar';

export default class Header extends Component {
  render() {
    return (
      <header className="movie-card-header">
        <h1 className="page-title">Movie Cards Library</h1>
        <SearchBar />
      </header>
    );
  }
}
