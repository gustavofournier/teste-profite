import React, { Component } from 'react';
import './App.css';
import NavBar from './components/header/NavBar';
import Banner from './components/main/Banner';
import Produtos from './components/main/Produtos';
import About from './components/footer/About';

class App extends Component {
  render() {
    return (
      <div id="container">
        <header>
          <NavBar/>
        </header>

        <main>
          <Banner/>
          <Produtos/>
        </main>

        <footer>
          <About/>
        </footer>
      </div>
    );
  }
}

export default App;
