import React from "react";
import classes from "./SocialMedia.module.css";
import Face from "../../../assets/images/socialMedia/face.svg";
import Insta from "../../../assets/images/socialMedia/insta.svg";
import Pint from "../../../assets/images/socialMedia/pint.svg";
import Twitter from "../../../assets/images/socialMedia/twitter.svg";
import Youtube from "../../../assets/images/socialMedia/youtube.svg";

const Icons = [Face, Insta, Twitter, Youtube];

const SocialMedia = (props) => (
  <div className={classes.socialContent}>
    <div>
      <h2 className={classes.title}>{props.title}</h2>
    </div>
    <div className={classes.socialIconBox}>
      {Icons.map((src) => (
        <img alt="" key={src} src={src} />
      ))}
    </div>
  </div>
);

export default SocialMedia;
