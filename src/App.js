import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
    color: '#fff',
    fontFamily: 'Dosis, sans-serif'
};

class Aggregate extends Component
{
    render() {
        return (
            <div style={{...defaultStyle, display: 'inline-block', width: '50%', marginBottom: '25px'}}>
                <h2>Text Number</h2>
            </div>
        )
    }
}

class Search extends Component
{
    render() {
        return (
            <div style={{...defaultStyle, fontSize: '20px', marginBottom: '50px'}}>
                <i className="fas fa-search" style={{marginRight: '30px'}}></i>
                <input type="text" style={{width: '220px', height: '30px'}}/>
            </div>
        );
    }
}

class Playlist extends Component
{
     render() {
         return (
             <div style={{...defaultStyle, width: '25%', display: 'inline-block'}}>
                 <h3>Title</h3>
                 <ul className="Playlist">
                     <li>Song 1</li>
                     <li>Song 2</li>
                     <li>Song 3</li>
                 </ul>
             </div>
         );
     }
}

class App extends Component {
  render() {
    return (
      <div className="App" style={defaultStyle}>
        <h1>Title</h1>
          <Aggregate/>
          <Aggregate/>
          <Search/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
      </div>
    );
  }
}

export default App;
