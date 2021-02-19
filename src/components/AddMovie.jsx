import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  render() {
    const { onSearchTextChange } = this.props;
    return (
      <div>
        <form data-testid="add-movie-form" method="get" />
        <label data-testid="title-input-label" htmlFor="text-input">
          <input
            onChange={ onSearchTextChange }
            data-testid="title-input"
            type="number"
          />
          Título do filme
        </label>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onSearchTextChange: PropTypes.func.isRequired,
};

export default AddMovie;
