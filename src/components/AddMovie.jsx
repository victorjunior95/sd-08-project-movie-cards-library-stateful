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
  TitleInput(onChange) {
    return (
      <div>

        <label htmlFor="text-input" data-testid="title-input-label">
          Título
          <input type="text" value={ title } onChange={ onChange } data-testid="title-input" />
        </label>
      </div>
    );
  }

  SubtitleInput(onChange) {
    return (
      <div>
        <label htmlFor="text-input" data-testid="subtitle-input-label">
          Subtítulo
          <input type="text" value={ subtitle } onChange={ onChange } data-testid="subtitle-input" />
        </label>
      </div>
    );
  }

  ImageInput(onChange) {
    return (
      <div>
        <label htmlFor="text-input" data-testid="image-input-label">
          Imagem
          <input type="text" value={ imagePath } onChange={ onChange } data-testid="image-input" />
        </label>
      </div>
    );
  }

  StoylineInput(onChange) {
    return (
      <div>
        <label htmlFor="text-input" data-testid="storyline-input-label">
          Sinopse
          <input type="textarea" value={ storyline } onChange={ onChange } data-testid="storyline-input" />
        </label>
      </div>
    );
  }

  RaitingInput(onChange) {
    return (
      <div>
        <label htmlFor="text-input" data-testid="rating-input-label">
          Avaliação
          <input type="number" value="rating" onChange={ onChange } data-testid="rating-input" />
        </label>
      </div>
    );
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        {this.TitleInput(onClick)}
        {this.SubTitleInput(onClick)}
        {this.imageInput(onClick)}
        {this.storyLineInput(onClick)}
        {this.raitingInput(onClick)}
        {/* {this.textInput(subtitle, onClick, 'Subtítulo', 'subtitle')}
        {this.textInput(imagePath, onClick, 'Imagem', 'image')}
        {this.numberInput(rating, onClick, 'Avaliação', 'rating')} */}

        <h3>AddMovie</h3>
      </form>
    );
  }
}

AddMovie.defaultProps = {
  onClick: null,
};

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

export default AddMovie;
