import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckMovieFavorite extends Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <div>
        <label data-testid="checkbox-input-label" htmlFor="bookmarkedOnly">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            name="bookmarkedOnly"
            type="checkbox"
            checked={ bookmarkedOnly }
            value="favorite"
            onChange={ onBookmarkedChange }
          />
        </label>
      </div>
    );
  }
}

CheckMovieFavorite.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default CheckMovieFavorite;
