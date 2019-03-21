import React, { Component } from 'react';

import './App.css';
import { Button } from './components/button';
import InputTextReadme from './components/input-text/readme';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button></Button>


        <div>
          <InputTextReadme/>
        </div>
      </div>
    );
  }
}

export default App;
