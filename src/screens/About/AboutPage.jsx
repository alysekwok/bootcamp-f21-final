import React from "react";
import classes from "./AboutPage.module.css";

const AboutPage = () => {
    console.log()
        return (
        <div>
            <h1 id={classes.pageheader}> Welcome To Our Website </h1>
            <div className={classes.maincontainer}>
            <div className={classes.centertext}>
                 <p>Our website provides a channel for pets to be seen and adopted.</p>
                  
            </div>
            <div className={classes.image}>
                <img src='image/caty.gif'></img>
                </div>
                </div>
            
          </div>
          
      );
        }

export default AboutPage;
