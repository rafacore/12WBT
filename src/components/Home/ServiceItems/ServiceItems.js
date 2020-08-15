import React from "react";
import ServiceItem from "./ServiceItem/ServiceItem";
import classes from "./ServiceItems.module.css";

const ServiceItems = ({ title, items }) => {
  const services = [
    {
      title: "nutrition",
      items: [{ label: "desc1" }, { label: "desc2" }, { label: "desc3" }],
    },
    {
      title: "fitness",
      items: [{ label: "fi1" }, { label: "fit2" }, { label: "fit3" }],
    },
    {
      title: "mindset",
      items: [{ label: "fi1" }, { label: "fit2" }, { label: "fit3" }],
    },
    {
      title: "support",
      items: [{ label: "fi1" }, { label: "fit2" }, { label: "fit3" }],
    },
  ];
  return (
    <div className={classes.serviceItems}>
      {services &&
        services.map((service) => (
          <ServiceItem
            title={service.title}
            type={service.title}
            items={service.items}
          />
        ))}
    </div>
  );
};

export default ServiceItems;
