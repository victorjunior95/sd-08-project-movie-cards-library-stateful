import React, { Componet } from 'react';
import PropTypes from 'prop-types';

class ButtonSubmitMovie extends Componet {
  render() {
    const { handleSubmit } = this.props;
    return (
      <button
        data-testid="send-button"
        type="submit"
        onClick={ handleSubmit }
      >
        Adicionar filme
      </button>
    );
  }
}

ButtonSubmitMovie.PropTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ButtonSubmitMovie;
