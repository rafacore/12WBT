import React from 'react';
import DescriptionItem from '../DescriptionItem/DescriptionItem';
import classes from './ServiceItem.module.css';

const ServiceItem = ( props ) => (

    <div className={classes.serviceItem}>
        <h3 className={classes.title}>{props.title}</h3>
 
   <ul>
       <DescriptionItem> {props.children}</DescriptionItem>
       <DescriptionItem> {props.children}</DescriptionItem>

        </ul> 
       
   
</div>
);

export default ServiceItem;