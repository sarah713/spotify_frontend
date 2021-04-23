import React,{useEffect, useState} from 'react';
import './App.css';
import Login from './Login';
import SpotifyWebApi from 'spotify-web-api-js';
import { getTokenFromUrl } from './spotify';
import Player from './Player';
import {useDataLayerValue} from './DataLayer';

const spotify=new SpotifyWebApi();

function App() {

const [token,setToken]=useState(null);
const [{user},dispatch] = useDataLayerValue();


  useEffect(()=>{
    const hash = getTokenFromUrl();
    window.location.hash="";

    const _token=hash.access_token;
    if(_token){
      dispatch({
        type:"SET_TOKEN",
        token:_token
      })
      setToken(_token);
      

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type:'SET_USER',
          user:user
        })
      });
      spotify.getUserPlaylists().then((playLists) => {
        dispatch({
          type:"SET_PLAYLISTS",
          playLists:playLists,
        })
      })
      spotify.getPlaylist('04v5kVS65HL53407s5wT6m').then((response) => {
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly:response
        })
      })
    }

   
  },[]);
 
  return (
    <div className="App">
     {
       token ?
      
       (
        <Player spotify={spotify}/>
       ):(
         <Login/>
       )
     }
     
    </div>
  );
}

export default App;
