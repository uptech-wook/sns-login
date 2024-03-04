import React from 'react';
import logo from './logo.svg';
import './App.css';
import FacebookLogin from '@greatsumini/react-facebook-login';

function App() {
  return (
    <div className="App"> 
      <div>FACEBOOK LOGIN</div>
      <FacebookLogin
        appId='1464420907827345'

      />
    </div>
  );
}

export default App;
