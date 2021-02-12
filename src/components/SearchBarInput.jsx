import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBarInput extends Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="search-bar-input" data-testid="text-input-label">
        Search
        <input
          name="search-bar-input"
          data-testid="text-input"
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }
}

SearchBarInput.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};
