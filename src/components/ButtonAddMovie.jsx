import React from 'react';
import PropTypes from 'prop-types';

class ButtonAddMovie extends React.Component {
  render() {
    const {
      teste,
    } = this.props;
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ teste }
      >
        Adicionar filme
      </button>
    );
  }
}

ButtonAddMovie.propTypes = {
  teste: PropTypes.func.isRequired,
};

export default ButtonAddMovie;
