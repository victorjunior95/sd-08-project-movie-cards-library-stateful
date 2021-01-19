import React from 'react';
import PropTypes from 'prop-types';

class SeachBar extends React.Component {
  checkBox() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label data-testid="checkbox-input-label" htmlFor="checkbox">
        Mostrar somente favoritos
        <input
          data-testid="checkbox-input"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
      </label>
    );
  }

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
          {this.checkBox()}
        </form>
      </div>
    );
  }
}

SeachBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default SeachBar;
