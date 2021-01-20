import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    }

  }

  // this.setState((state, props) => ({
  //   counter: state.counter + props.increment
  // }));

  render() {
    const onclick = this.props.onClick;

    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" value="title">
          Título
          <input type="text" data-testid="title-input" onChange={ this.state.title } />
        </label>
        <br/>
        <label data-testid="subtitle-input-label" value="subtitle">
          Subtítulo
          <input type="text" data-testid="subtitle-input" onChange={ this.state.subtitle } />
        </label>
        <br/>
        <label data-testid="image-input-label" value="imagePath">
          Imagem
          <input type="text" data-testid="image-input" onChange={ this.state.imagePath } />
        </label>
        <br/>
        <label data-testid="storyline-input-label" value="storyline">
          Sinopse
          <textarea data-testid="storyline-input" onChange={ this.state.storyline } />
        </label>
        <br/>
        <label data-testid="rating-input-label" value="rating">
          Avaliação
          <input type="text" data-testid="rating-input" onChange={ this.state.imagePath } />
        </label>
        <br/>
        <label data-testid="genre-input-label" value="genre">
          Gênero
          <select data-testid="genre-input" onChange={ this.state.imagePath }>
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspende</option>
          </select>
        </label>
        <br/>

        <button type="button" data-testid="send-button" onClick={ onclick }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onclick: PropTypes.func.isRequired
}

export default AddMovie;
