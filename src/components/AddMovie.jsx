import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagemPath: '',
      storyline: '',
      rating: '',
      genre: '',
    };
  }

  render() {
    return (
      <form>
        Alguma coisa pra não ficar vazio!
      </form>
    );
  }
}

export default AddMovie;
