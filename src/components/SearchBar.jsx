import React from 'react';
import PropTypes from 'prop-types';

class SeachBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <div>
        <form action="" data-testid="search-bar-form">
          <label htmlFor="searchbar" data-testid="text-input-label">
            Inclui o texto
            <input
              id="searchbar"
              value={ searchText }
              onChange={ onSearchTextChange }
              data-testid="text-input"
              type="text"
            />
          </label>
        </form>
      </div>
    );
  }
}

SeachBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.string.isRequired,
};

export default SeachBar;
