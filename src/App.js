import React, { Component } from 'react';
import './App.css';
import NotesApp from './component/NotesApp';

class App extends Component {
  render() {
    return (
      <div className="container">
        <NotesApp />
      </div>
    );
  }
}

export default App;