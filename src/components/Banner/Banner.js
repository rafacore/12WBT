import React from 'react';
import classes from './Banner.module.css';

const Banner = ( props ) => {
  if (props.type === 'large') {

  return(

    <section className={classes.BannerSec}>
    
    <div className={classes.container}>
<h1>{props.title}</h1>
 
  <p>{props.subTitle}</p>
  
  </div>
      

</section>
  
);
}
return(

  
 
  <div className={classes.workMethodItem}>
               <h3>{props.title}</h3>
               <p>{props.subTitle}</p>
           </div>
    
    


);
}
export default Banner;

