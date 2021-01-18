import React from 'react';
import PropTypes from 'prop-types';

class InputCheckBox extends React.Component {
  render() {
    const { checked, onChange } = this.props;
    return (
      <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
        Mostrar somente favoritos
        <input
          id="checkbox-input"
          data-testid="checkbox-input"
          type="checkbox"
          checked={ checked }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputCheckBox.defaultProps = {
  checked: { false: false },
};

InputCheckBox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default InputCheckBox;
