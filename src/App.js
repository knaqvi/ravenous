import React from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './src/components/BusinessList/BusinessList';
import SearchBar from './src/components/SearchBar/SearchBar.js';

class App extends Component {
  render() {
    return (
      <div class="App">
      <h1>ravenous</h1>
        <SearchBar />, document.getElementById('app')
        <BusinessList /> document.getElementById('app')
</div>
    );
  }
}

export default App;
