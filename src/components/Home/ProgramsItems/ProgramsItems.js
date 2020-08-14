import React from 'react';
import ProgramItem from './ProgramItem/ProgramItem';
import classes from './ProgramsItems.module.css';

const ProgramsItems = () => (

    <div className={classes.programsItems}>
  <ProgramItem item="a"/>
  <ProgramItem  item="b"/>
  <ProgramItem  item="c"/>
  <ProgramItem  item="d"/>
  
 
    

</div>
);

export default ProgramsItems;