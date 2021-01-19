import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  optionsMap(data) {
    return data.map(({ optValue, text }) => (
      <option key={ optValue } value={ optValue } data-testid="select-option">
        { text }
      </option>
    ));
  }

  render() {
    const { data, name, children, onChange, value } = this.props;

    return (
      <label htmlFor={ name } data-testid="select-input-label">
        { children }
        <select
          id={ name }
          name={ name }
          data-testid="select-input"
          onChange={ onChange }
          value={ value }
        >
          { this.optionsMap(data) }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Select;
