import React from "react";

const DescriptionItem = (props) => {
  return (
    <>
      {props.children.map((keyName, i) => (
        <li>{props.children}</li>
      ))}
    </>
  );
};

export default DescriptionItem;
