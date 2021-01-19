import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  // eslint-disable-next-line max-lines-per-function
  renderTextInput() {
    const {
      searchText,
      onSearchTextChange,
    } = this.props;
    return (
      <label data-testid="text-input-label" htmlFor="text-input">
        Inclui o texto:
        <input
          data-testid="text-input"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>);
  }

  renderCheckBox() {
    const { bookmarkedOnly,
      onBookmarkedChange } = this.props;
    return (
      <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
        Mostrar somente favoritos
        <input
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
        />
      </label>
    );
  }

  render() {
    return (
      <form data-testid="search-bar-form">
        { this.renderTextInput() }
        { this.renderCheckBox() }
      </form>
    );
  }
}
SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default SearchBar;
