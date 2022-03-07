import React, { useEffect, useState } from 'react';
import './App.css';
import Login from "./components/Login/Login";
import { getToken } from "./components/Login/spotify";
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi

function App() {

  const [token, setToken] = useState(null);

  useEffect(() => {
      let tokenHash = getToken();
      window.location.hash = "";
      let  _token = tokenHash.access_token;

      if (_token) {
        setToken(_token);

        spotify.setAccessToken(token)
        spotify.getMe();
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
