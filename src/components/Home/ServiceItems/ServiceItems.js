import  React from 'react';
import ServiceItem from './ServiceItem/ServiceItem';
import classes from './ServiceItems.module.css';

const ServiceItems = ( props ) =>(
    

    <div className={classes.serviceItems}>
    
       
       
            <ServiceItem title="nutrition "> description 1  </ServiceItem>
            <ServiceItem title="Fitness"> description 2</ServiceItem>
            <ServiceItem title="Mindset"> description 3</ServiceItem>
            <ServiceItem title="Support"> description 4</ServiceItem>
        
    </div>
 
  
   
  
);

export default ServiceItems;