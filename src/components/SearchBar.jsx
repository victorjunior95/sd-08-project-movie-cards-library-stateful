// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: true,
      selectedGenre: '',
    };
  }

  onSearchTextChange() {
    const { searchText } = this.state;
    console.log({ searchText });
  }

  onBookmarkChange() {
    const { bookmarkedOnly } = this.state;
    console.log(bookmarkedOnly);
  }

  onSelectGenderChange() {
    const { selectedGenre } = this.state;
    console.log({ selectedGenre });
  }

  render() {
    return (
      <section>
        <input type="text" name="" id="" data-testid="search-bar-form" />
      </section>
    );
  }
}

export default SearchBar;
