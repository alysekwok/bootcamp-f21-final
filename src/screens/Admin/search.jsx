import classes from "./AdminPage.module.css";


const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className={classes.visuallyhidden}>Search</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search animals"
            name="s" 
        />
        <button id={classes.but}type="submit">Search</button>
        
    </form>
    
);

export default SearchBar;
