import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={s.nav_bar}>
      <ul>
        <li>
          <NavLink to='/' activeClassName={s.active}>Profile</NavLink>
        </li>
        <li>
          <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
        </li>
        <li>
          <NavLink to='/news' activeClassName={s.active}>News</NavLink>
        </li>
        <li>
          <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
