import React from "react";
import ServiceItem from "./ServiceItem/ServiceItem";
import classes from "./ServiceItems.module.css";

const services = [
  {
    nutrition: ["desc1", "desc1", "desc1"],
    fitness: ["desc1", "desc1", "desc1"],
    Mindset: ["desc1", "desc1", "desc1"],
  },
];

const ServiceItems = (props) => {
  return (
    <div className={classes.serviceItems}>
      {/* {Object.values(services).map((keyName, i) => (
            <li key={i}>
            <span >key: {i} Name: {services[keyName]}</span>
        </li>
        ))} */}
      <ServiceItem item="nutrition" title="nutrition ">
        {" "}
        {services.nutrition}{" "}
      </ServiceItem>
      <ServiceItem title="Fitness" item="fitness">
        {" "}
        description 2
      </ServiceItem>
      <ServiceItem title="Mindset" item="mindset">
        {" "}
        description 3
      </ServiceItem>
      <ServiceItem title="Support" item="support">
        {" "}
        description 4
      </ServiceItem>
    </div>
  );
};

export default ServiceItems;
