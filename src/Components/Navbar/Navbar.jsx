import React from 'react';
import {Avatar} from 'antd';

import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const NavBar = (props) => {
  return (
    <div className={s.nav_bar}>
      <nav>
        <ul>
          <li>
            <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
          </li>
          <li>
            <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
          </li>
            <li>
            <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
          </li>
            <li>
                <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
            </li>
          <li>
            <NavLink to='/news' activeClassName={s.active}>News</NavLink>
          </li>
          <li>
            <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
          </li>
          {/*<li>*/}
          {/*  <a href="#">Settings</a>*/}
          {/*</li>*/}
        </ul>
      </nav>
      <h3>Friends</h3>
      <div className={s.friends}>

        {
          props.store.sideBar.friends.map((item, index) => (
            <NavLink to='/' key={index} className={s.friend}>
              <Avatar size={item.size} src={item.avatar}/>
              <div className={s.name}>{item.name}</div>
            </NavLink>
          ))
        }


      </div>
    </div>
  );
};

export default NavBar;
