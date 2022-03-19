import React, { useEffect, useState } from 'react';
import './App.css';
import Login from "./components/Login/Login";
import { getToken } from "./components/Login/spotify";
import SpotifyWebApi from 'spotify-web-api-js';
import { useStateProviderValue } from './StateProvider';
import Player from './components/Player/Player';

const spotify = new SpotifyWebApi;

function App() {

  const [{user, token}, dispatch] = useStateProviderValue();

  useEffect(() => {
      let tokenHash = getToken();
      window.location.hash = "";
      let  _token = tokenHash.access_token;
      if (_token) {
        dispatch({
          type: "SET_TOKEN",
          token: _token,
        })

        spotify.setAccessToken(_token)
        spotify.getMe().then((user) => {
            dispatch({
              type: "SET_USER",
              user: user,
            })
        });
        spotify.getUserPlaylists().then((playlists) => {
            dispatch({
              type: "SET_PLAYLIST",
              playlists: playlists,
            })
        });

        spotify.getPlaylist('37i9dQZEVXcHSqgCcpUaay').then(response => {
          dispatch({
              type: "SET_DISCOVER",
              discover: response,
          })
        });

      }
  }, []);

  return (
    <div className="App">
      {
        token ? (
          <Player spotify={spotify}></Player>
        ) : (
        <Login></Login>
        )
      }
    </div>
  );
}

export default App;
