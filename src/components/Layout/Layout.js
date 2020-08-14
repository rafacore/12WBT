import React from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import Logo from '../../assets/images/Logo.svg'
import classes from './Layout.module.css';

const layout = ( props ) => (

    <>
    
   <Toolbar logo={Logo} ></Toolbar>
   
    <main>
        {props.children}
    </main>
    </>
);


export default layout;