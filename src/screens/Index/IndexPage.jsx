import React from "react";
import classes from "./IndexPage.module.css";

const IndexPage = () => {
    console.log()
        return (
        <div>
            <h1 id={classes.pageheader}><img id={classes.pic}src= 'image/kit.gif'></img> Welcome To Our Website <img id={classes.pic}src= 'image/kit.gif'></img></h1>
            <div className={classes.maincontainer}>
            <div className={classes.centertext}>
                <h1><img id={classes.pic}src= 'image/giphy.gif'></img>Welcome to CatScout</h1>
                 <h2 id={classes.second}>We provide a channel for pets to be seen and adopted.</h2>
                 <b id={classes.third}>The cat shown on the right is RainMeow, he is the cutest and loves 
                 to hop around, eat cookies, and blast rainbow waves. RainMeow needs a home and you can help!</b>
                 
            </div>
            <div className={classes.image}>
                <img src='image/caty.gif'></img>
                </div>
                </div>
            
          </div>
          
      );
        }

export default IndexPage;
