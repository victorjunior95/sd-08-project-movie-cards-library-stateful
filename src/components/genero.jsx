import React from 'react';

import PropTypes from 'prop-types';

class Genero extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <div>
        <label data-testid="genre-input-label" htmlFor="gen">
          Gênero
          <select
            id="gen"
            name="genre"
            data-testid="genre-input"
            onChange={ onChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

Genero.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Genero;
