import React, { Component } from 'react';
import { Navbar, Branch } from './components'

class App extends Component {
  render() {
    return (<div>
      <Navbar/>
      <Branch/>
    </div>);
  }
}

export default App;
