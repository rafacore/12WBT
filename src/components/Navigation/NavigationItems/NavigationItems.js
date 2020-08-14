import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';

const NavigationItems = () => (

    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>How it Works</NavigationItem>
        <NavigationItem link="/" >Nutrition</NavigationItem>
        <NavigationItem link="/" >Fitness</NavigationItem>
        <NavigationItem link="/" >Mindset</NavigationItem>
        <NavigationItem link="/" >Community</NavigationItem>
        <NavigationItem link="/" >FAQs</NavigationItem>

    </ul>
);

export default NavigationItems;