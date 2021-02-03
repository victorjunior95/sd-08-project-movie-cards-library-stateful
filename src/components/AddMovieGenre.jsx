import React from 'react';
import PropTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const { changeState } = this.props;
    return (
      <label htmlFor="addmovieGenre" data-testid="genre-input-label">
        Gênero
        <select
          id="addmovieGenre"
          data-testid="genre-input"
          onChange={ (event) => { changeState({ genre: event.target.value }); } }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

export default Genre;

Genre.propTypes = {
  changeState: PropTypes.func.isRequired,
};
