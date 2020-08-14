import React from 'react';
import FooterNav from '../Footer/FooterNav/FooterNav';
import Logo from '../Logo/Logo';

import classes from './Footer.module.css';

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
    <div>
    <ul>
                    <li>face</li>
                    <li>face</li>
                    <li>face</li>
                    <li>face</li>
                </ul>
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