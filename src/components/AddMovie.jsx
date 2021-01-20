import React from 'react';

export default class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    };
  }

  renderTitle() {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          data-testid="title-input"
          onChange={ (e) => this.setState({ title: e.target.value }) }
          value={ title }
        />
      </label>
    );
  }

  renderSubtitle() {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          type="text"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ (e) => this.setState({ subtitle: e.target.value }) }
        />
      </label>
    );
  }

  renderImage() {
    const { imagePath } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          value={ imagePath }
          data-testid="image-input"
          onChange={ (e) => this.setState({ imagePath: e.target.value }) }
        />
      </label>
    );
  }

  renderTextArea() {
    const { storyline } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <textarea
          value={ storyline }
          data-testid="storyline-input"
          onChange={ (e) => this.setState({ storyline: e.target.value }) }
        />
      </label>
    );
  }

  renderRating() {
    const { rating } = this.state;
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          type="number"
          value={ rating }
          data-testid="rating-input"
          onChange={ (e) => this.setState({ rating: e.target.value }) }
        />
      </label>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.renderTitle()}
        {this.renderSubtitle()}
        {this.renderImage()}
        {this.renderTextArea()}
        {this.renderRating()}
      </form>
    );
  }
}
