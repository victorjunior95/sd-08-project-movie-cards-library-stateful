import React from 'react';
import AddMovieButton from './AddMovieButton';
import AddMovieInputTitle from './AddMovieInputTitle';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    };
    this.onChangeForm = this.onChangeForm.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChangeForm({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  onClick() {
    const { onClick } = this.props;
    this.setState((state) => {
      onClick(state);
      return {
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: '',
      };
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
      <AddMovieInputTitle onChangeForm={ this.onChangeForm } title={ this.state.title } />
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            id="subtitle-input"
            data-testid="subtitle-input"
            onChange={ this.onChangeForm }
            value={ this.state.subtitle }
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            id="image-input"
            data-testid="image-input"
            onChange={ this.onChangeForm }
            value={ this.state.imagePath }
          />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            onChange={ this.onChangeForm }
            value={ this.state.storyline }
            name="storyline"
          />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            id="rating-input"
            data-testid="rating-input"
            onChange={ this.onChangeForm }
            value={ this.state.rating }
          />
        </label>
        <label htmlFor="genre-input-label" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            id="genre-input"
            data-testid="genre-input"
            onChange={ this.onChangeForm }
            value={ this.state.genre }
          >
            <option value="action" data-testid="genre-option">
              Ação
            </option>
            <option value="comedy" data-testid="genre-option">
              Comédia
            </option>
            <option value="thriller" data-testid="genre-option">
              Suspense
            </option>
          </select>
        </label>
        <AddMovieButton onClick={ this.onClick } />
      </form>
    );
  }
}

export default AddMovie;
