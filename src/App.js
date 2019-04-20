import React, { Component } from 'react';

import './App.css';
import { Button } from './components/button';
import { Label } from './components/label';
import { Header } from './components/header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button></Button>
        <Label type={"red"}></Label>
        <Header tagName={"h1"} content="ㅎㅎㅎ"></Header>
      </div>
    );
  }
}

export default App;
