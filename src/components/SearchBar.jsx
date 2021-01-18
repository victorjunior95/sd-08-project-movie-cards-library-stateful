import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input-label">
          Inclui o texto:
          <input
            id="text-input-label"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
      </form>
    );
  }
}

// SearchBar.propTypes = {
//   searchText: PropTypes.string,
//   onSearchTextChange: PropTypes.function,
// };

// SearchBar.defaultProps = {
//   searchText: '',
// };

export default SearchBar;
