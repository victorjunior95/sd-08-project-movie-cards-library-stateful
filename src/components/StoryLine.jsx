import React from 'react';

const StoryLine = () => (
  <label htmlFor="storyline" data-testid="storyline-input-label">
    Sinopse
    <textarea
      name="storyline"
      cols="30"
      rows="10"
      data-testid="storyline-input"
    />
  </label>
);

export default StoryLine;
