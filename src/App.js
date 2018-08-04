import React, { Component } from 'react';
import './App.css';
import Main from './Components/Main';
import Header from './Components/Header';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <Main />
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
