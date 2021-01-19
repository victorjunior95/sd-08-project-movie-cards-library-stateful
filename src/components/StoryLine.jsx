import React from 'react';
import PropTypes from 'prop-types';

const StoryLine = (props) => {
  const { onChange } = props;

  return (
    <label htmlFor="storyline" data-testid="storyline-input-label">
      Sinopse
      <textarea
        name="storyline"
        cols="30"
        rows="10"
        data-testid="storyline-input"
        onChange={ onChange }
      />
    </label>
  );
};

StoryLine.defaultProps = {
  onChange: null,
};

StoryLine.propTypes = {
  onChange: PropTypes.func,
};

export default StoryLine;
