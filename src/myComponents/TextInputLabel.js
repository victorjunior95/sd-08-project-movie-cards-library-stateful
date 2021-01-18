import React from 'react';
import PropTypes from 'prop-types';

class TextInputLabel extends React.Component {
  render() {
    const { value, onChange, dataTesteId, dataLabelTesteId } = this.props;

    return (
      <label htmlFor={ dataTesteId } data-testid={ dataLabelTesteId }>
        Inclui o texto
        <input
          type="text"
          name={ dataTesteId }
          value={ value }
          onChange={ onChange }
          data-testid={ dataTesteId }
        />
      </label>
    );
  }
}

TextInputLabel.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  dataTesteId: PropTypes.string.isRequired,
  dataLabelTesteId: PropTypes.string.isRequired,
};

export default TextInputLabel;
