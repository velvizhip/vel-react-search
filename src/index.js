import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './components/header';
import Main from './components/main';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
