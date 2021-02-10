import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor() {
    super();

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    }
  }

  onSearchTextChange({ target }) {
    const { value } = target;

    this.setState({
      searchText: value,
    })
  }

  onBookmarkedChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      bookmarkedOnly: value,
    })
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;

    this.setState({
      selectedGenre: value,
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar value={ this.state.name } onChange={ this.onSearchTextChange, this.onBookmarkedChange, this.onSelectedGenreChange } />
      </div>
    );
  }
}

export default App;
