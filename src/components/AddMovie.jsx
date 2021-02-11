import React from 'react';
import AddForm from './AddForm';

class AddMovie extends React.Component {
  render() {
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    return (
      <form data-testid="add-movie-form">
        <AddForm />
      </form>
    );
  }
}

export default AddMovie;
