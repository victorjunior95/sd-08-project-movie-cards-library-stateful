import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleTitle = this.handleTitle.bind(this);
    this.handleSubtitle = this.handleSubtitle.bind(this);
    this.handleImg = this.handleImg.bind(this);
    this.handleSinopse = this.handleSinopse.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
    };
  }

  handleTitle(e) {
    const newTitle = e.target.value;
    this.setState({
      title: newTitle,
    });
  }

  handleSubtitle(e) {
    this.setState({
      subtitle: e.target.value,
    });
  }

  handleImg(e) {
    this.setState({
      imagePath: e.target.value,
    });
  }

  handleSinopse(e) {
    this.setState({
      storyline: e.target.value,
    });
  }

  handleRating(e) {
    this.setState({
      rating: e.target.value,
    });
  }

  addMovieTitle() {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          id="title-input"
          data-testid="title-input"
          value={ title }
          onChange={ this.handleTitle }
        />
      </label>
    );
  }

  addMovieSubtitle() {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          id="subtitle"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ this.handleSubtitle }
        />
      </label>
    );
  }

  addMovieImg() {
    const { imagePath } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          id="image-input"
          imagePath={ imagePath }
          data-testid="image-input"
          value={ imagePath }
          onChange={ this.handleImg }
        />
      </label>
    );
  }

  addMovieSinopse() {
    const { storyline } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <textarea
          id="storyline-input"
          storyline={ storyline }
          data-testid="storyline-input"
          value={ storyline }
          onChange={ this.handleSinopse }
        />
      </label>
    );
  }

  addMovieRating() {
    const { rating } = this.state;
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          id="rating-input"
          type="number"
          data-testid="rating-input"
          value={ rating }
          onChange={ this.handleRating }
        />
      </label>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        { this.addMovieTitle() }
        { this.addMovieSubtitle() }
        { this.addMovieImg() }
        { this.addMovieSinopse() }
        { this.addMovieRating() }
      </form>
    );
  }
}

export default AddMovie;
