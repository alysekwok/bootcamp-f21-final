import mongoDB from "./index"
import Cat from "./models/Cat"

// server/mongodb/index.js

export async function findCat() {
    await mongoDB()
    const cat = await Cat.find({});
    console.log(cat)
    return cat
  }


  export async function search() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('cats');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}