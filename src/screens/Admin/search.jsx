import style from "./AdminPage.module.css";
const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className={style.visuallyhidden}>Search</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search animals"
            name="s" 
            className={style.searchBar}
        />
        <button className={style.but}type="submit">Search</button>
    </form>
);

export default SearchBar;
