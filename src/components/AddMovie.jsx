import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  getNewTitle(onSearchTextChange) {
    return (
      <label data-testid="title-input-label" htmlFor="text-input">
        Título
        <input
          onChange={ onSearchTextChange }
          data-testid="title-input"
          title=""
        />
      </label>
    );
  }

  render() {
    const { onSearchTextChange } = this.props;
    return (
      <div>
        <form data-testid="add-movie-form" method="get" />
        { this.getNewTitle(onSearchTextChange) }
      </div>
    );
  }
}

AddMovie.propTypes = {
  onSearchTextChange: PropTypes.func.isRequired,
};

export default AddMovie;
