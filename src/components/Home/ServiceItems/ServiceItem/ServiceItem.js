import React from "react";
import Item from "../DescriptionItem/DescriptionItem";
import classes from "./ServiceItem.module.css";

const ServiceItem = ({ type, title, items }) => (
  <div className={classes.serviceItem}>
    <h3
      className={`${classes.text} ${
        type === "nutrition"
          ? classes.nutrition
          : type === "fitness"
          ? classes.fitness
          : type === "mindset"
          ? classes.mindset
          : type === "support"
          ? classes.support
          : null
      }`}
    >
      {title}
    </h3>
    <ul>
      {items &&
        items.map((item) => (
          <li key={item.label}>
            <span></span>
            <Item label={item.label} />
          </li>
        ))}
    </ul>
  </div>
);

export default ServiceItem;
