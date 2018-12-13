import React from 'react';
import BurgerLogo from '../../assets/images/burger-logo.png';
import sytles from './Logo.css';

const logo = (props) => {
  return (
    <div className={sytles.Logo}>
      <img src={BurgerLogo} alt="My burger logo" />
    </div>
  )
}

export default logo;
