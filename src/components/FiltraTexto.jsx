import React from 'react';
import PropTypes from 'prop-types';

class FiltraTexto extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
    };

    this.props = {
      onSearchTextChange(event) {
      //  console.log(event.target);
        this.setState(() => ({ [event.target.name]: event.target.value }));
      },
    };
  }

  render() {
    const { searchText } = this.state;
    const { onSearchTextChange } = this.props;
    return (
      <div>
        <label htmlFor="searchText" data-testid="text-input-label">
          Inclui o texto:
          <br />
          <input
            type="text"
            name="searchText"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
      </div>
    );
  }
}

FiltraTexto.propTypes = ({
  onSearchTextChange: PropTypes.func,
  FiltraTexto: PropTypes.string,
}).isRequired;

export default FiltraTexto;
