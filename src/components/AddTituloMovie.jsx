import React from 'react';
import PropTypes from 'prop-types';

class AddTituloMovie extends React.Component {
  render() {
    const {
      title,
      updateTitle,
    } = this.props;
    return (
      <label htmlFor="text-input" data-testid="title-input-label">
        Título
        <input
          data-testid="title-input"
          type="text"
          value={ title }
          onChange={ updateTitle }
        />
      </label>
    );
  }
}

AddTituloMovie.propTypes = {
  title: PropTypes.string.isRequired,
  updateTitle: PropTypes.func.isRequired,
};

export default AddTituloMovie;
