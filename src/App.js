import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Header from './components/Header';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
  }

  onSearchTextChange(e) {
    this.setState({
      searchText: e.target.value,
    });
  }

  render() {
    const { searchText } = this.state;
    return (
      <div className="App">
        <Header />
        <SearchBar
          onSearchTextChange={ this.onSearchTextChange }
          searchText={ searchText }
        />
      </div>
    );
  }
}

export default App;
