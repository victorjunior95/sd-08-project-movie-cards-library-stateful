import React from 'react';

import PropTypes from 'prop-types';

import Titulo from './titulo.jsx';
import SubTitulo from './subtitulo.jsx';
import Image from './image.jsx';
import Sinopse from './sinopse.jsx';
import Avaliacao from './avaliacao.js';
import Genero from './genero.jsx';
import Botao from './botao.jsx';

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

    this.onChangeAction = this.onChangeAction.bind(this);
    this.botaoCliqued = this.botaoCliqued.bind(this);
  }

  onChangeAction(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  botaoCliqued() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <Titulo value={ title } onChange={ this.onChangeAction } />
        <SubTitulo value={ subtitle } onChange={ this.onChangeAction } />
        <Image value={ imagePath } onChange={ this.onChangeAction } />
        <Sinopse value={ storyline } onChange={ this.onChangeAction } />
        <Avaliacao value={ rating } onChange={ this.onChangeAction } />
        <Genero value={ genre } onChange={ this.onChangeAction } />
        <Botao value={ this.state } onClick={ onClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
