import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ () => this.handleSubmit }
      >
        Adicionar filme
      </button>
    )
  }
}

export default Button;