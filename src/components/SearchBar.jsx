import React from 'react';
import PropTypes from 'prop-types';
import './searchBar.css';

class SearchBar extends React.Component {
  renderInput() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <input
        id="text-input-label"
        type="text"
        value={ searchText }
        onChange={ onSearchTextChange }
        data-testid="text-input"
      />
    );
  }

  renderCheckBox() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <input
        type="checkbox"
        id="checkbox-input"
        checked={ bookmarkedOnly }
        onChange={ onBookmarkedChange }
        data-testid="checkbox-input"
      />
    );
  }

  render() {
    return (
      <form className="search-bar" data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="text-input-label">
          Inclui o texto:
          { this.renderInput() }
        </label>
        <label data-testid="checkbox-input-label" for="checkbox-input">
          { this.renderCheckBox() }
        Mostrar somente favoritos
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchBar;
