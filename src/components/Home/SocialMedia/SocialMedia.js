import React from 'react';
import classes from './SocialMedia.module.css';


const SocialMedia = ( props ) =>(
    <>
    <div>
    <p>{props.title}</p>
</div>
<div className={classes.socialIconBox}>

    <div>face</div>
    <div>face</div>
    <div>face</div>
    <div>face</div>
    
   

</div>
</>
);

export default SocialMedia;