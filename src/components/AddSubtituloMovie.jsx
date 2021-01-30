import React from 'react';
import PropTypes from 'prop-types';

class AddSubtituloMovie extends React.Component {
  render() {
    const {
      subtitle,
      update,
    } = this.props;
    return (
      <label htmlFor="text-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          data-testid="subtitle-input"
          type="text"
          value={ subtitle }
          onChange={ update }
        />
      </label>
    );
  }
}

AddSubtituloMovie.propTypes = {
  subtitle: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
};

export default AddSubtituloMovie;
