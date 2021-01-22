import React, { Componet } from 'react';
import PropTypes from 'prop-types';

class ButtonSubmitMovie extends Componet {
  render() {
    const { handleReset } = this.props;
    return (
      <button
        data-testid="send-button"
        type="submit"
        onClick={ handleReset }
      >
        Adicionar filme
      </button>
    );
  }
}

ButtonSubmitMovie.PropTypes = {
  handleReset: PropTypes.func.isRequired,
};

export default ButtonSubmitMovie;
