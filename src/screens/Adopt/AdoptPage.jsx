import React from "react";
import classes from "./AdoptPage.module.css";

const AdoptPage = ({animals}) => {
    console.log(animals)
        return (
        <div className={classes.centertext}>
          <h1> Browse Shelter Animals </h1>
            <p>User should be able to view a list of cats when they click on the Adopt tab on the nav bar. The list should display a list of all the cats in the shelter’s DB. You need to hardcode cat data in your database</p>
              
            
          </div>
      );
        }

export default AdoptPage;