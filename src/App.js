import React from 'react';
import './App.css';

import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        Header.render()
      </div>
    );
  }
}

export default App;
