import React from 'react';
import PropTypes from 'prop-types';

class FiltraFavoritos extends React.Component {
  constructor() {
    super();

    this.state = {
      bookmarkedOnly: false,
    };

    this.props = {
      //  console.log(event.target);
      onBookmarkedChange() { this.setState(() => ({ bookmarkedOnly: true })); },
    };
  }

  render() {
    const { bookmarkedOnly } = this.state;
    const { onBookmarkedChange } = this.props;
    return (
      <div>
        <label htmlFor="checkbox" data-testid="checkbox-input-label">
          <input
            type="checkbox"
            data-testid="checkbox-input"
            name="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
          Mostrar somente favoritos
        </label>
        <br />
        <br />
      </div>
    );
  }
}

FiltraFavoritos.propTypes = ({
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
}).isRequired;

export default FiltraFavoritos;
