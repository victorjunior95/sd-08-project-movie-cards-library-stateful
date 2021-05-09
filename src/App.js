import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar
          searchText=""
          onSearchTextChange={ () => 'ok' }
          bookmarkedOnly={ false }
          onBookmarkedChange={ () => 'ok' }
          selectedGenre=""
          onSelectedGenreChange={ () => 'ok' }
        />
      </div>
    );
  }
}

export default App;
