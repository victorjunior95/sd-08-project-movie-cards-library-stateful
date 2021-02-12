import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import Option from './Option';

export default class GenreFilter extends Component {
  // constructor() {
  //   super();

  // this.callsOption = this.callsOption.bind(this);

  // this.state = {
  //   matrix: [
  //     ['Todos', ''],
  //     ['Ação', 'action'],
  //     ['Comédia', 'comedy'],
  //     ['Suspense', 'thriller'],
  //   ],
  // };
  // }

  // callsOption() {
  //   const { matrix } = this.state;
  //   return (
  //     matrix.map((element) => <Option key={ element[0] } valueOfValue={ element[1] } value={ element[0] } />)
  //   );
  // }

  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="genre-filter" data-testid="select-input-label">
        Filtrar por gênero
        <select
          name="genre-filter"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          data-testid="select-input"
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
          {/* { this.callsOption() } */}
        </select>
      </label>
    );
  }
}

GenreFilter.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
