import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";

import Header from './Components/Header/Header'
import NavBar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";


const App = () => {
  return (
    <BrowserRouter>
      <div className="App_Wrapper">
        <Header/>
        <NavBar/>
        <div className="content">
          <Route exact path='/' component={Profile}/>
          <Route path='/dialogs' component={Dialogs}/>
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
