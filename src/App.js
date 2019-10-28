import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {Route} from "react-router-dom";

import Header from './Components/Header/Header'
import NavBar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";


const App = (props) => {
  return (
      <div className="App_Wrapper">
        <Header/>
        <NavBar store={props.store.sideBar}/>
        <div className="content">
          <Route exact path='/profile' render={() => <Profile store={props.store.profilePage} dispatch={props.store.dispatch}/>}/>
          <Route path='/dialogs' render={() => <Dialogs store={props.store.dialogsPage} />}/>
          <Route path='/news' render={News} />
          <Route path='/music' render={Music} />
        </div>
      </div>
  );
};

export default App;
