import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, 
      onBookmarkedChange, selectedGenre, onSelectedGenreChange} = this.props;
    return (
    <section>
      <form>
        <label>
          Inclui o Texto
          <input type="text" name="" id=""/>
        </label>
        </form>     
    </section>)

    
  }
}

export default SearchBar;