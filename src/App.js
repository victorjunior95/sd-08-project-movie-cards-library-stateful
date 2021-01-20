import React from 'react';
import './App.css';

import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <MovieLibrary />
      </main>
    </div>
  );
}

export default App;
