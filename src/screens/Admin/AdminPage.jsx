import React from "react";
import ApplicationCard from "../../components/ApplicationCard/ApplicationCard";
import ViewMoreCard from "../../components/ViewMoreCard/ViewMoreCard";
import style from "./AdminPage.module.css";
import Search from './search';

export default function AdminPage( {apps, app} ) {
    console.log(apps)
    /*
    async function submitHandler(e) {
        upon clicking approve, the selected form will be approved
        all forms for the appropriate cat are deleted/hidden 
        cat is removed/hidden from db
    }
    */
    return (
        <div className={style.mainContainer}>
            <div className = {style.searchContainer}>
                <Search/>
                <button id={style.approve} type='reset'>Approve</button>
            </div>
            <div className = {style.secondContainer}>
            <div className = {style.listcontainer}>
            <div className={style.list}>
        {
          apps && apps.map(app => <ApplicationCard app = {app} key = {app.id}/>)
        }
            </div>
        </div>
                    <div className = {style.expandBox}>
                    {
                        apps && apps.map(app => <ViewMoreCard app = {app} key = {app.id}/>)
                    }
            </div>
        </div>
        </div>
    );
}
