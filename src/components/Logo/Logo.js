import React from 'react';
import classes from './Logo.module.css';
import LogoImg from '../../assets/images/Logo.svg';

const Logo = ( props ) => (

    <div className={classes.logo}><img src={LogoImg} /></div>
);

export default Logo;
