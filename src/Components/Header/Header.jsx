import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {Button} from "antd";


const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.logo}><img alt="img"
                                         src="https://www.designfreelogoonline.com/wp-content/uploads/2014/11/00180-ORANGE-3D-logo-design-free-logos-online-01.png"/>
            </div>
            <div className={s.loginBlock}>
                {
                    props.isAuth === true
                        ? <NavLink to={'/users/1'}><span>{props.dataAuth.login}</span></NavLink>
                        : <NavLink to={'/login'}><Button type="primary">Login</Button></NavLink>
                }
            </div>
        </header>
    );
};

export default Header;