import React from "react";
import ApplicationCard from "../../components/ApplicationCard/ApplicationCard";
import ViewMoreCard from "../../components/ViewMoreCard/ViewMoreCard";
import style from "./AdminPage.module.css";
import Search from './search';

export default function AdminPage( {apps} ) {
    console.log(apps)
    return (
        <div className={style.mainContainer}>
            <div className = {style.searchContainer}>
                <Search />
            </div>
            <div className = {style.secondContainer}>
            <div className = {style.container}>
            <div className={style.list}>
        {
          apps && apps.map(app => <ApplicationCard app = {app} key = {app.id}/>)
        }
            </div>
        </div>
                    <div className = {style.expandBox}>
                    {

                    }
            </div>
        </div>
            </div>
    );
}
