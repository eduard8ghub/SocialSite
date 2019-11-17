import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {Route} from "react-router-dom";

import NavBar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import News from "./Components/News/News";
import Login from "./Components/Login/Login";
import DialogsStore from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import SettingsContainer from "./Components/Setings/SettingsContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";


const App = (props) => {
  return (
      <div className="App_Wrapper">
        <HeaderContainer/>
        <div className="wrap_content">
            <NavBar store={props.store.getState()}/>
            <div className="content">
                <Route exact path='/profile' render={() => <Profile store={props.store}/>}/>
                <Route path='/dialogs' render={() => <DialogsStore store={props.store}/>}/>
                <Route path='/users/:userId?' render={() => <UsersContainer />}/>
                <Route path='/settings/:userId?' render={() => <SettingsContainer />}/>
                <Route path='/login' render={Login} />
                <Route path='/news' render={News} />
            </div>
        </div>
          {/*<Footer/>*/}
      </div>
  );
};

export default App;
