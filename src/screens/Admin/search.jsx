import classes from "./AdminPage.module.css";
async function submitHandler(e){
    e.preventDefault()
    try {
        const res=await fetch('http://localhost:3000/api/adopt/forms',{
            method:'PATCH', 
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                name:name,
                email:email,
                phone:phone,
                location:location,
                appliedCat: cat
            })
        })
    }
    alert("Application was successfully submitted") 
    } catch (e) {
        
    }
}


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
        <button id={classes.approve} onClick={submitHandler} type='reset'>Approve</button>
        
    </form>
    
);

export default SearchBar;
