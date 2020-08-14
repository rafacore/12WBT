import React from "react";
import classes from "./Block.module.css";

const Block = (props) => {
  if (props.type === 'small') {
    return(

      <div className={classes.boxJoin}>
      <div><h3 className={classes.title}>Your success story is next!</h3></div>
      <div><a href="#"> <div className={classes.btnCheck}>JOIN NOW > </div></a></div>
      <div><p className={classes.warningTxt}>Payment plans available</p></div>

      </div>
    );


  }
  return (
  <>
  <div className={classes.Block}>
  {props.src == null ? (
     <div className={classes.BlockLaunched}>
     <p className={classes.title}>{props.title}</p>
     <p>{props.subTitle}</p>
     <a href="#"><div className={classes.btnCheck}>  {props.textBtn} </div> </a>
     <p>{props.warning}</p>
     </div>
   
  ):(
    <div className={classes.imgHp}>
    <img src={props.src} />
  </div>
  
  )
}

      
    
    </div>
  </>
  
);
}



export default Block;
