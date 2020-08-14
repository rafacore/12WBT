import React from 'react';
import classes from './ProgramsItem.module.css';



const ProgramItem = ( props) => (


    <div>
    <a href=""  className={`${classes.programsItem} ${props.item === "a" ? classes.weightLoss : props.item === "b" ? classes.strength : props.item === "c" ? classes.running : props.item === "d" ? classes.baby : null }`} > <span className={classes.btnItem}>Weight Loss > </span> <div className={classes.overlay}></div></a>
    </div>

);


export default ProgramItem;