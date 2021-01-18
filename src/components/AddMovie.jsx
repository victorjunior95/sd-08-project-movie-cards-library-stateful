import React from 'react';
import Input from './Input';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.state = {
    //   subtitle: '',
      title: '',
    //   imagePath: '',
    //   storyline: '',
    //   rating: 0,
    //   genre: 'action',
    };
  }

  onChangeHandler({ target }) {
    this.setState({
      title: target.value,
    });
  }

  render() {
    const { title } = this.state;
    return (
      <form>
        <Input
          type="text"
          labelText="Título"
          datadolabel="title-input-label"
          datadoinput="title-input"
          value={ title }
        />
      </form>
    );
  }
}

export default AddMovie;
