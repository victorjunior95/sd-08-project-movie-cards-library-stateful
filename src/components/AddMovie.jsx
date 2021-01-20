import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      // subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(event) {
    const { target } = event;
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  inputTitle() {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          data-testid="title-input"
          name="title"
          onChange={ this.handleEvent }
          value={ title }
        />
      </label>
    );
  }

  // const { imagePath, storyline, rating, genre } = this.state;
  render() {
    // const { title, subtitle } = this.state;
    return (
      <form>
        {this.inputTitle()}
      </form>
      // <form data-testid="add-movie-form">
      //   {this.inputTitle()}
      //   <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
      //     Subtítulo
      //     <input
      //       value={ subtitle }
      //       data-testid="subtitle-input"
      //       onChange={ this.handleEvent }
      //     />
      //   </label>
      // </form>
    );
  }
}

export default AddMovie;
