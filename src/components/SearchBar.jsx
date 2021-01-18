// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  
  render(){
    return(
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label">
          Inclui o texto:
        </label>
        <input data-testid="text-input" value={this.props.searchText} onChange={this.props.onSearchTextChange}/>
      </form>
    );
  }
}

export default SearchBar;