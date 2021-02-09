import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { onSearchTextChange } = this.props;
    return (
      <div>
        <form data-testid="add-movie-form" method="get" />
        <label data-testid="title-input-label" htmlFor="text-input">
          <input
            onChange={ onSearchTextChange }
            data-testid="title-input"
          />
          Título
        </label>
      </div>
    );
  }
}

export default AddMovie;
