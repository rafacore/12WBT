import React from "react";
import Banner from '../../components/Banner/Banner';
import Block from '../../components/Block/Block';
import ServiceItems from '../../components/Home/ServiceItems/ServiceItems';
import SocialMedia from '../../components/Home/SocialMedia/SocialMedia';
import FooterNav from '../../components/Footer/FooterNav/FooterNav';
import classes from "./HomeBuilder.module.css";
import ProgramsItems from '../../components/Home/ProgramsItems/ProgramsItems';
import BlockImgHp from "../../assets/images/home/mishandtodd-hp.jpg";
 import Logo from '../../components/Logo/Logo';

const Home = () => (
  <>
    <section className={classes.sec1}>
        <Banner 
        type="large"
            title={`"How long have you been waiting?  
            It's time to do something for YOU!"`}
            subTitle= '12 weeks will change your life'
            />
        {/* <div className={classes.testg}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
            
     </div> */}
     

    </section>

    <section className={classes.LaunchedSec}>
      

      <Block 
            title="NEW BLOKES ONLY PROGRAM HAS LAUNCHED!"
            subTitle="
                I’ve partnered with master strength conditioning expert, Todd
            Liubinskas, to develop an online program like no other - created for
            blokes,by blokes." 
            textBtn="Check it out NOW"/>
      
          <Block 
           src={BlockImgHp}/>
    
    </section>

    <section className={`${classes.showcase}`}>
        <h2>We've lost 1.5 million kilos</h2>
        <div>Carousel</div>

        <p>YOUR story is next!</p>
        <p>
* Results may vary. Exercise and proper diet are necessary to achieve and maintain weight loss.
        </p>
    </section>
    <section className={`${classes.workMethodBanner}`}>
       <h2> Why 12WBT will work for YOU </h2>
       </section>
       <section className={classes.workMethodSec}>
   
       <div className={classes.container}>
       <div className={classes.workMethodBox}>
           <Banner 
            title="Simple"
            subTitle= 'Never think about whats for dinner  Every week youll get tailored meal  workout plans plus access to 0 recipes.'
            /> 
             <Banner 
            title="Convenient"
            subTitle= 'Designed to fit into YOUR life, my 12WBT is 100% customisable. Choose from 8 dietary preferences, express workouts 15min meals.'
            /> 
             <Banner 
            title="Proven"
            subTitle= 'Drawing on 25+ years experience - I know what works. 100,000s of Australians have reached their weight loss and fitness goals with 12WBT.'
            /> 
</div>
         
        
           
       </div>

    </section>
     <section className={`${classes.Programs}`}>
        
            <div>
            <h3>
                No matter your fitness level, I've got a program for YOU
            </h3>
              <Block 
              type="small"
            title="Your success story is next!"
            subTitle=" " 
            textBtn="JOIN NOW"/>
            </div>

            <ProgramsItems />
        
    
    </section>
   <section className={`${classes.Services}`}>
        <h3>What do YOU get?</h3>
        <ServiceItems title='nutrition'> </ServiceItems>
 
        <div>
            <a href=""><div className={classes.btnItemSer}>Curious about my 12WBT? Get a FREE sample today > </div> </a>
        </div>
        </section>

        <section className={classes.socialMediaSec}>
            {/* <div>
                <p>Join the community</p>
            </div>
            <div className={classes.socialIconBox}>
            
                <div>face</div>
                <div>face</div>
                <div>face</div>
                <div>face</div>
                
               
          
            </div> */}
            <SocialMedia title="Join the community"></SocialMedia>
        </section>
       <section className={classes.joinSec}>
            <h3>Our members have lost over
1.5 million kilograms with our exercises, meal plans & mindset lessons*</h3>

                  <Block 
              type="small"
            title="Your success story is next!"
            subTitle=" " 
            textBtn="JOIN NOW"/>
        </section>
    
    <footer className={classes.FooterSec}>
        <Logo></Logo>
        <FooterNav></FooterNav>
       
         <div>
                <ul>
                    <li>face</li>
                    <li>face</li>
                    <li>face</li>
                    <li>face</li>
                </ul>
            </div>
        
        
    </footer>
  </>
);

export default Home;
