import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CheckBoxFav extends Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label htmlFor="checkbox-fav" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          name="checkbox-fav"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
        />
      </label>
    );
  }
}

CheckBoxFav.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};
