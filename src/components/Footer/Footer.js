import React from 'react';
import FooterNav from '../Footer/FooterNav/FooterNav';
import Logo from '../Logo/Logo';
import Face from '../../assets/images/socialMedia/face.svg';
import Insta from '../../assets/images/socialMedia/insta.svg';
import Pint from '../../assets/images/socialMedia/pint.svg';
import Twitter from '../../assets/images/socialMedia/twitter.svg';
import Youtube from '../../assets/images/socialMedia/youtube.svg';
// import FontAwesome from  '@fortawesome/fontawesome-svg-core';
// import { faCode, faHighlighter } from '@fortawesome/free-solid-svg-icons';

import classes from './Footer.module.css';

const Icons = [Face, Insta, Pint, Twitter, Youtube]

const Footer = () => (
    <>
     <footer className={classes.FooterSec}>
        <Logo isFooter></Logo>
        <div>
        <p>Consult your healthcare professional before beginning any diet or fitness regime.
            Copyright © 2020 12WBT Trading Pty Ltd.
        </p>
        <FooterNav></FooterNav>
    </div>
    <div className={classes.socialIcon}>
    
                    <div className={classes.socialBoxText}><p>share. connect. follow</p></div>
                    {Icons.map(src => (
            <img alt="" key={src} src={src} />
          ))}
                    
               
    </div>
    <div>
       
    </div>
    <div>
    <p>* Results may vary. Exercise and proper diet are necessary to achieve and maintain weight loss.</p>
    <p><a href="https://www.12wbt.com/terms/covid-relief-offer-2020-terms">** View full competition terms and conditions here.</a></p>
    </div>
       
         <div>
             
            </div>
        
        
    </footer>
    </>
    
);


export default Footer;