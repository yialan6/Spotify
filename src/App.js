import React, { useEffect, useState } from 'react';
import './App.css';
import Login from "./components/Login/Login";
import { getToken } from "./components/Login/spotify";
import SpotifyWebApi from 'spotify-web-api-js';
import { useStateProviderValue } from './StateProvider';

const spotify = new SpotifyWebApi;

function App() {

  const [{user, token}, dispatch] = useStateProviderValue();

  useEffect(() => {
      let tokenHash = getToken();
      window.location.hash = "";
      let  _token = tokenHash.access_token;

      if (_token) {
        dispatch({
          type: "GET_TOKEN",
          token: _token,
        })

        spotify.setAccessToken(_token)
        spotify.getMe().then((user) => {
            console.log(user)

            dispatch({
              type: "SET_USER",
              user: user,
            })
        });
      }
  }, []);

  return (
    <div className="App">
      {
        token ? (
          <h1>main page</h1>
        ) : (
        <Login></Login>
        )
      }
    </div>
  );
}

export default App;
