import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  searchTextComponent(searchText, onSearchTextChange) {
    return (
      <label data-testid="text-input-label" htmlFor="text-input">
        Inclui o texto
        <input
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
        />
      </label>
    );
  }

  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    const { searchText, onSearchTextChange } = this.props;
    return (
      <div>
        <p>Hello!</p>
        <form data-testid="search-bar-form" method="get" />
        { this.searchTextComponent(searchText, onSearchTextChange) }
        <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  // selectedGenre: PropTypes.string.isRequired,
  // onSelectedGenreChange: PropTypes.string.isRequired,
};

export default SearchBar;
