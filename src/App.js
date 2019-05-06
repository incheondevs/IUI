import React, { Component } from 'react';
import Typography from './components/Typography';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Typography scaleLevel={3}>Hello World</Typography>
        <Typography level={2}>Hello World</Typography>
        <Typography inline>Hello World</Typography>
        <Typography bold>Hello World</Typography>
        <Typography strike>Hello World</Typography>
      </div>
    );
  }
}

export default App;
