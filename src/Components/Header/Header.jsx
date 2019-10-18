import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}><img src="https://www.designfreelogoonline.com/wp-content/uploads/2014/11/00180-ORANGE-3D-logo-design-free-logos-online-01.png"/></div>
    </header>
  );
}

export default Header;