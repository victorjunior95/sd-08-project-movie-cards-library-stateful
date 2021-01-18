import React from 'react';
import InputField from './InputField';

class SearchBar extends React.Component {
  render() {
    const objProps = this.props;
    return (
      <form data-testid="search-bar-form">
        <InputField objProps={ objProps } />
      </form>
    );
  }
}

export default SearchBar;
