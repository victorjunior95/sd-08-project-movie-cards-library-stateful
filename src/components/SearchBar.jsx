import React from 'react';
import InputField from './InputField';

class SearchBar extends React.Component {
  renderCheckBoxField(props) {
    return (
      <label htmlFor="checkbox" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          type="checkbox"
          name="checkbox"
          checked={ props.bookmarkedOnly }
          onChange={ props.onBookmarkedChange }
          data-testid="checkbox-input"
        />
      </label>
    );
  }

  render() {
    const objProps = this.props;
    return (
      <form data-testid="search-bar-form">
        <InputField objProps={ objProps } />
        { this.renderCheckBoxField(objProps) }
      </form>
    );
  }
}

export default SearchBar;
