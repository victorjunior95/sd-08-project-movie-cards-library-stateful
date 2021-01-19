import React from 'react';

import movies from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: 'Todos',
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.setSearchBar = this.setSearchBar.bind(this);
  }

  onSearchTextChange({ target }) {
    this.setState({
      searchText: target.value,
    });
  }

  onBookmarkedChange({ target }) {
    this.setState({
      bookmarkedOnly: target.checked,
    });
  }

  onSelectedGenreChange({ target }) {
    this.setState({
      selectedGenre: target.value,
    });
  }

  onButtonClick() {
    console.log(this.state);
  }

  setSearchBar() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <SearchBar
        searchText={ searchText }
        onSearchTextChange={ this.onSearchTextChange }
        bookmarkedOnly={ bookmarkedOnly }
        onBookmarkedChange={ this.onBookmarkedChange }
        selectedGenre={ selectedGenre }
        onSelectedGenreChange={ this.onSelectedGenreChange }
      />
    );
  }

  setMovieList() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <MovieList
        movies={ movies }
        searchText={ searchText }
        bookmarkedOnly={ bookmarkedOnly }
        selectedGenre={ selectedGenre }
      />
    );
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.setSearchBar()}
        {this.setMovieList()}
        <AddMovie onClick={ this.onButtonClick } />
      </div>
    );
  }
}

export default App;
