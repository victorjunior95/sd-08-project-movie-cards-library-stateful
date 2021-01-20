// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovie extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.initialState = this.initialState.bind(this);
    this.state = {
      title: "",
      subtitle: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action",
    };
  }

  handleChange({ target }) {
      //Muda o valor do estado para o valor recebido no onChange
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  initialState() {
      //Retorna os estados ao valor inicial
      const { onClick } = this.props;
      onClick(this.state);
      this.setState({
        title: "",
        subtitle: "",
        imagePath: "",
        storyline: "",
        rating: 0,
        genre: "action",
      })
  }

  render() {
    return (
      <form data-testid="add-movie-form">

        <label data-testid="title-input-label" htmlFor="title">
        Título
          <input
            type="text"
            value={ this.state.title }
            data-testid="title-input"
            onChange={ this.handleChange }
            name="title"
          />
        </label>

        <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
          <input
            type="text"
            value={ this.state.subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleChange }
            name="subtitle"
          />
        </label>

        <label data-testid="image-input-label" htmlFor="image">
        Imagem
        <input
            type="text"
            value={ this.state.imagePath }
            data-testid="image-input"
            onChange={ this.handleChange }
            name="image"
        />
        </label>

        <label data-testid="storyline-input-label" htmlFor="image">
        Sinopse
        <textarea
            data-testid="storyline-input"
            onChange={ this.handleChange }
            name="storyline"
        >
            { this.state.storyline }
        </textarea>
        </label>

        <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
            type="number"
            value={ this.state.rating }
            data-testid="rating-input"
            onChange={ this.handleChange }
            name="rating"
        />
        </label>

        <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
            value={ this.state.genre }
            name="genre"
            data-testid="genre-input"
            onChange={ this.handleChange }
        >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
        </label>

        <button data-testid="send-button" onClick={ this.initialState } >Adicionar filme</button>

      </form>
    );
  }
}

AddMovie.propTypes = {
    onClick: PropTypes.func.isRequired,
  };
