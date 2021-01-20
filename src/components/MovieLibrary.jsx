// implement MovieLibrary component here
import React from 'react';

import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

export default class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarckedChange = this.onBookmarckedChange.bind(this);
    this.onSelectGenreChange = this.onSelectGenreChange.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  onBookmarckedChange(event) {
    this.setState({
      bookmarkedOnly: event.target.checked,
    });
  }

  onSelectGenreChange(event) {
    this.setState({
      selectedGenre: event.target.value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarckedChange={ this.onBookmarckedChange }
          onSelectGenreChange={ this.onSelectGenreChange }
        />
        <AddMovie />
      </>
    );
  }
}
