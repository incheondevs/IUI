import React, { Component } from 'react';
import Typography from './components/Typography';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Typography level={4}>Hello World</Typography>
      </div>
    );
  }
}

export default App;
