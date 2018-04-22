import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
    color: '#fff',
    fontFamily: 'Dosis, sans-serif'
};

let fakeServerData = {
    user: {
        name: 'Bart',
        playlists: [
            {name: 'Pop',
            songs: [
                {name: 'Blablabla', duration: 8},
                {name: 'Another', duration: 12},
                {name: 'Love', duration: 3}
            ]},
            {name: 'Jazz',
            songs: [
                {name: 'Bla', duration: 12},
                {name: 'Cat', duration: 6}
            ]},
            {name: 'Electro',
            songs: [
                {name: 'Me', duration: 5},
                {name: 'CYou', duration: 22}
                ]},
            {name: 'Mix',
            songs: [
                {name: 'Me', duration: 5},
                {name: 'CYou', duration: 9},
                {name: 'Here', duration: 10}
            ]}
        ]
    }
};

class PlaylistsCounter extends Component
{
    render() {
        return (
            <div style={{...defaultStyle, display: 'inline-block', width: '50%', marginBottom: '25px'}}>
                <h2>{this.props.playlists.length} playlists</h2>
            </div>
        )
    }
}

class DurationCounter extends Component
{
    render() {
        let playlists = this.props.playlists;
        let allSongs = playlists.reduce((songs, playlist)=>{
            return songs.concat(playlist.songs);
        },[]);
        let duration = allSongs.reduce((dur, song)=>{
            return dur + song.duration;
        },0);
        let hours = Math.floor(duration/60);
        let minutes = duration%60;
        let durationFormated = hours + 'hours, ' + minutes + ' minutes';

        return (
            <div style={{...defaultStyle, display: 'inline-block', width: '50%', marginBottom: '25px'}}>
                <h2>{durationFormated}</h2>
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
  constructor(){
        super();
        this.state = {serverData: {}};
    }
  componentDidMount(){
      setTimeout(()=>{
          this.setState({serverData: fakeServerData});
      },1000);
  }
  render() {
    return (
      <div className="App" style={defaultStyle}>
          {this.state.serverData.user ?
              <div>
                  <h1>
                      {this.state.serverData.user.name}'s Playlists
                  </h1>
                  <PlaylistsCounter playlists={this.state.serverData.user.playlists} />
                  <DurationCounter playlists={this.state.serverData.user.playlists} />
                  <Search/>
                  <Playlist/>
                  <Playlist/>
                  <Playlist/>
                  <Playlist/>
              </div> : <h1>Loading...</h1>}
      </div>
    );
  }
}

export default App;
