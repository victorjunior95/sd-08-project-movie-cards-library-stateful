import React from 'react';

import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

export default class MovieLibrary extends React.Component {
  render() {
    return (
      <div>
        <AddMovie />
        <SearchBar />
      </div>
    );
  }
}
