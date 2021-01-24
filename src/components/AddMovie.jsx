import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };

    this.onChange = this.onChange.bind(this);
    this.inputText = this.inputText.bind(this);
    // this.inputTextArea = this.inputTextArea.bind(this);
    // this.inputNumber = this.inputNumber.bind(this);
    // this.inputSelect = this.inputSelect.bind(this);
    // this.formSubmission = this.formSubmission.bind(this);
  }

  onChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  inputText(title) {
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
                Título
        <input
          type="text"
          value={ title }
          id="title-input"
          data-testid="title-input"
          name="title"
          onChange={ this.onChange }
        />
      </label>
    );
  }
}

// AddMovie.propTypes = {
//     onClick: PropTypes.func.isRequired,
// };

export default AddMovie;
