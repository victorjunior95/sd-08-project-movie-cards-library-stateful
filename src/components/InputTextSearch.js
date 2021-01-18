import React from 'react';
import PropTypes from 'prop-types';

class InputTextSearch extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="searchInput" data-testid="text-input-label">
        Inclui o texto:
        <input
          value={ searchText }
          onChange={ onSearchTextChange }
          id="searchInput"
          data-testid="text-input"
        />
      </label>
    );
  }
}

InputTextSearch.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default InputTextSearch;
