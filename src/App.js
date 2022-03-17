import React, { Component } from 'react';

import './App.css';

import PaletteContainer from './containers/WeekContainer';
import TodoContainer from './containers/TodoContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PaletteContainer />
        <TodoContainer></TodoContainer>
      </div>
    );
  }
}

export default App;
