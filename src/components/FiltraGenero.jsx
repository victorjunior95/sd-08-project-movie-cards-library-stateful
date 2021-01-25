import React from 'react';
import PropTypes from 'prop-types';

class FiltraGenero extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedGenre: '',
    };

    this.props = {
      //  console.log(event.target);
      onSelectedGenreChange() { this.setState(() => ({ selectedGenre: 'ok' })); },
    };
  }

  render() {
    const { selectedGenre } = this.state;
    const { onSelectedGenreChange } = this.props;
    return (
      <label data-testid="select-input-label" htmlFor="g">
        Filtrar por gênero
        <select
          name="g"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          data-testid="select-input"
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

FiltraGenero.propTypes = ({
  onSelectedGenreChange: PropTypes.func,
  selectedGenre: PropTypes.string,
}).isRequired;

export default FiltraGenero;
