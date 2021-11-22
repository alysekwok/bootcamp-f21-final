import React from "react";
import classes from "./AboutPage.module.css";

const AboutPage = () => {
    console.log()
        return (
        <div >
            <div className={classes.centertext}>
                <h1> Welcome To Our Website </h1>
                 <p>Our website provides a channel for pets to be seen and adopted.</p>
                  
            </div>
            <div className={classes.image}>
                <img src='image/caty.gif'></img>
                </div>
            
          </div>
      );
        }

export default AboutPage;