import React from 'react';
import PropTypes from 'prop-types';

class MostrarFavoritos extends React.Component {
  render() {
    const { marked, change } = this.props;
    return (
      <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          type="checkbox"
          data-testid="checkbox-input"
          checked={ marked }
          onChange={ change }
        />
      </label>
    );
  }
}

MostrarFavoritos.propTypes = {
  marked: PropTypes.bool.isRequired,
  change: PropTypes.func.isRequired,
};

export default MostrarFavoritos;
