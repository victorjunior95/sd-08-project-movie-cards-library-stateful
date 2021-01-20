import React from 'react';
import PropTypes from 'prop-types';

class AddGenre extends React.Component {
  render() {
    return(
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          id="genre-input"
          name="genre"
          type="number"
          value={ this.props.value }
          data-testid="genre-input"
          onChange={ this.props.handleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

AddGenre.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

AddGenre.defaultProps = {
  value: '',
};

export default AddGenre;
