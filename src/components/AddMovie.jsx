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

  render() {
    const { onClick } = this.props;
    return (
      <div>
        <form>
          <label data-testid="title-input-label">
            Título
            <input type="text" title={ this.state.title } data-testid="title-input" />
          </label>

          <label data-testid="subtitle-input-label">
            Subtítulo
            <input type="text" value={ this.state.subtitle } data-testid="subtitle-input" />
          </label>
          <label data-testid="image-input-label">
            Imagem
            <input type="text" value={ this.state.imagePath } data-testid="image-input" />
          </label>
          <label data-testid="storyline-input-label">
            Sinopse
            <input type="textarea" value={ this.state.storyline } data-testid="storyline-input" />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
