import React from "react";
import style from "./AdminPage.module.css";
import Search from './search';

const AdminPage = () => {
    return (
        <div className = {style.searchContainer}>
            <Search />
        </div>
    );
}

export default AdminPage;