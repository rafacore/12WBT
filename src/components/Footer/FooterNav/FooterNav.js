import React from "react";
import classes from "./FooterNav.module.css";

const FooterNav = () => (
  <div className={classes.wrapper}>
    <div>
      <a href="https://www.12wbt.com/blog">12WBT Blog</a>
    </div>
    <div>
      |<a href="/careers/our-team">Support Crew</a>
    </div>
    <div>
      |<a href="/careers">Careers</a>
    </div>
    <div>
      |<a href="/faqs/question">Contact Us</a>
    </div>
    <div>
      |<a href="/terms">Terms</a>
    </div>
    <div>
      |<a href="/privacy">Privacy</a>
    </div>

    {/* <p>* Results may vary. Exercise and proper diet are necessary to achieve and maintain weight loss.

        <a href="">** View full competition terms and conditions here.</a></p> */}
  </div>
);

export default FooterNav;
