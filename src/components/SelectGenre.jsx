import React from 'react';
import PropTypes from 'prop-types';

function SelectGenre(props) {
  const { labelName, testid1, testid2, testid3, optionList, onChange } = props;

  return (
    <label htmlFor="genre" data-testid={ testid1 }>
      {labelName}
      <select name="genre" data-testid={ testid2 } onChange={ onChange }>
        {optionList.map((i) => (
          <option key={ i.name } value={ i.value } data-testid={ testid3 }>
            {i.name}
          </option>
        ))}
      </select>
    </label>
  );
}

SelectGenre.defaultProps = {
  onChange: null,
};

SelectGenre.propTypes = {
  labelName: PropTypes.string.isRequired,
  testid1: PropTypes.string.isRequired,
  testid2: PropTypes.string.isRequired,
  testid3: PropTypes.string.isRequired,
  optionList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func,
};

export default SelectGenre;
