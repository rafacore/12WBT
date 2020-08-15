import React from "react";
import Banner from "../../components/Banner/Banner";
import Block from "../../components/Block/Block";
import Footer from "../../components/Footer/Footer";
import ServiceItems from "../../components/Home/ServiceItems/ServiceItems";
import Slides from "../../components/UI/Slides/Slides";
import SocialMedia from "../../components/SocialMedia/SocialMedia";

import classes from "./HomeBuilder.module.css";
import ProgramsItems from "../../components/Home/ProgramsItems/ProgramsItems";
import BlockImgHp from "../../assets/images/home/mishandtodd-hp.jpg";
import Logo from "../../components/Logo/Logo";

const Home = () => (
  <>
    <section className={classes.sec1}>
      <Banner
        type="large"
        title={`"How long have you been waiting?  
            It's time to do something for YOU!"`}
        subTitle="12 weeks will change your life"
      />
    </section>

    <section className={classes.LaunchedSec}>
      <Block
        title="NEW BLOKES ONLY PROGRAM HAS LAUNCHED!"
        subTitle="
                I’ve partnered with master strength conditioning expert, Todd
            Liubinskas, to develop an online program like no other - created for
            blokes,by blokes."
        textBtn="Check it out NOW"
      />

      <Block src={BlockImgHp} />
    </section>

    <section className={`${classes.showcase}`}>
      <h2 className={classes.title}>We've lost 1.5 million kilos</h2>
      <div className={classes.container}>
        <Slides />
      </div>

      <div>
        <h2>YOUR story is next!</h2>
        <p>
          * Results may vary. Exercise and proper diet are necessary to achieve
          and maintain weight loss.
        </p>
      </div>
    </section>
    <section className={`${classes.workMethodBanner}`}>
      <h2> Why 12WBT will work for YOU </h2>
    </section>
    <section className={classes.workMethodSec}>
      <div className={classes.container}>
        <div className={classes.workMethodBox}>
          <Banner
            title="Simple"
            subTitle="Never think about whats for dinner  Every week youll get tailored meal  workout plans plus access to 0 recipes."
          />
          <Banner
            title="Convenient"
            subTitle="Designed to fit into YOUR life, my 12WBT is 100% customisable. Choose from 8 dietary preferences, express workouts 15min meals."
          />
          <Banner
            title="Proven"
            subTitle="Drawing on 25+ years experience - I know what works. 100,000s of Australians have reached their weight loss and fitness goals with 12WBT."
          />
        </div>
      </div>
    </section>
    <section className={`${classes.Programs}`}>
      <div>
        <h3>No matter your fitness level, I've got a program for YOU</h3>
        <Block
          type="small"
          title="Your success story is next!"
          subTitle=" "
          textBtn="JOIN NOW"
        />
      </div>

      <ProgramsItems />
    </section>
    <section className={`${classes.Services}`}>
      <h2>What do YOU get?</h2>
      <ServiceItems title="nutrition"> </ServiceItems>

      <div>
        <a href="">
          <div className={classes.btnItemSer}>
            Curious about my 12WBT? Get a FREE sample today >{" "}
          </div>{" "}
        </a>
      </div>
    </section>

    <section className={classes.socialMediaSec}>
      <SocialMedia title="Join the community"></SocialMedia>
    </section>
    <section className={classes.joinSec}>
      <div className={classes.joinContent}>
        <h3>
          Our members have lost over 1.5 million kilograms with our exercises,
          meal plans & mindset lessons*
        </h3>

        <Block
          type="small"
          title="Your success story is next!"
          subTitle=" "
          textBtn="JOIN NOW"
        />
      </div>
    </section>

    <footer>
      <Footer></Footer>
    </footer>
  </>
);

export default Home;
