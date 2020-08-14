import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import SignNav from "../SignNav/SignNav";
import classes from "./Toolbar.module.css";

const Toolbar = (props) => (
  <div className={classes.Toolbar}>
    <Logo />

    <NavigationItems />

    <SignNav />
  </div>
);

export default Toolbar;
