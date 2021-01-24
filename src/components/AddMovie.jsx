import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  titleInput(title) {
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          data-testid="title-input"
          type="text"
          value={ title }
          onChange={ (e) => this.setState({ title: e.target.value }) }
        />
      </label>
    );
  }

  subtitleInput(subtitle) {
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          data-testid="subtitle-input"
          type="text"
          value={ subtitle }
          onChange={ (e) => this.setState({ subtitle: e.target.value }) }
        />
      </label>
    );
  }

  imagePathInput(imagePath) {
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          data-testid="image-input"
          type="text"
          value={ imagePath }
          onChange={ (e) => this.setState({ imagePath: e.target.value }) }
        />
      </label>
    );
  }

  storylineInput(storyline) {
    return (
      <label htmlFor="image-input" data-testid="storyline-input-label">
        Sinopse
        <input
          data-testid="storyline-input"
          type="textarea"
          value={ storyline }
          onChange={ (e) => this.setState({ storyline: e.target.value }) }
        />
      </label>
    );
  }

  ratingInput(rating) {
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          value={ rating }
          onChange={ (e) => this.setState({ rating: e.target.value }) }
        />
      </label>
    );
  }

  genreInput(genre) {
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          value={ genre }
          onChange={ (e) => this.setState({ genre: e.target.value }) }
        >
          <option data-testid="genre-option" value="action" defaultChecked>Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {this.titleInput(title)}
        {this.subtitleInput(subtitle)}
        {this.imagePathInput(imagePath)}
        {this.storylineInput(storyline)}
        {this.ratingInput(rating)}
        {this.genreInput(genre)}
        <button data-testid="send-button" type="submit">Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
