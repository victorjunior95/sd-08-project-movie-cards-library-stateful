// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      // genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearDataMovie = this.clearDataMovie.bind(this);
  }

  //  inspirado no codigo da patricia https://github.com/tryber/sd-08-project-movie-cards-library-stateful/pull/46/files?file-filters%5B%5D=.jsx
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.clearDataMovie();
  }

  clearDataMovie() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      // genre: 'action',
    });
  }

  // textInput()
  // textInput(title, onClick, Title, variavel) {
  //   return (
  //     <div>

  //       <label data-testid={ `${variavel}-input-label` }>
  //         {Title}
  //         <input type="text" value={ title } data-testid={ `${variavel}-input` } onChange={ onClick } />
  //       </label>
  //     </div>
  //   );
  // }

  // numberInput(title, onClick, Title, variavel) {
  //   return (
  //     <div>
  //       <label data-testid={ `${variavel}-input-label` }>
  //         {Title}
  //         <input type="number" value={ title } data-testid={ `${variavel}-input` } onChange={ onClick } />
  //       </label>
  //     </div>
  //   );
  // }
  TitleInput(title) {
    return (
      <div>

        <label
          htmlFor="text-input"
          data-testid="title-input-label"
        >
          Título
          <input
            type="text"
            value={ title }
            onChange={ this.handleChange }
            data-testid="title-input"
          />
        </label>
      </div>
    );
  }

  SubtitleInput(subtitle) {
    return (
      <div>
        <label
          htmlFor="text-input"
          data-testid="subtitle-input-label"
        >
          Subtítulo
          <input
            type="text"
            value={ subtitle }
            onChange={ this.handleChange }
            data-testid="subtitle-input"
          />
        </label>
      </div>
    );
  }

  ImageInput(imagePath) {
    return (
      <div>
        <label
          htmlFor="text-input"
          data-testid="image-input-label"
        >
          Imagem
          <input
            type="text"
            value={ imagePath }
            onChange={ this.handleChange }
            data-testid="image-input"
          />
        </label>
      </div>
    );
  }

  StorylineInput(storyline) {
    return (
      <div>
        <label
          htmlFor="text-input"
          data-testid="storyline-input-label"
        >
          Sinopse
          <input
            type="textarea"
            value={ storyline }
            onChange={ this.handleChange }
            data-testid="storyline-input"
          />
        </label>
      </div>
    );
  }

  RatingInput(rating) {
    return (
      <div>
        <label
          htmlFor="number-input"
          data-testid="rating-input-label"
        >
          Avaliação
          <input
            type="number"
            value={ rating }
            onChange={ this.handleChange }
            data-testid="rating-input"
          />
        </label>
      </div>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        {this.TitleInput(title)}
        {this.SubtitleInput(subtitle)}
        {this.ImageInput(imagePath)}
        {this.StorylineInput(storyline)}
        {this.RatingInput(rating)}
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.handleSubmit }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default AddMovie;
