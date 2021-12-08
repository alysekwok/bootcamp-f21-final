import mongoDB from "../index"
import Cat from "../models/Cat"

// server/mongodb/index.js

export async function getCats() { //get all cats
    await mongoDB();
    const cats = await Cat.find({});
    console.log(cats);
    return cats;
}

export async function getAdoptableCats() { //get adoptable cats
    await mongoDB();
    const adoptableCat = await Cat.find({isAdopted: {$eq: true}});
    if (adoptableCat == null) {
        throw new Error("There is no cat to adopt");
    } else {
        return adoptableCat;
    }
}

export async function getCat(id) { //get a cat with the id inputted
    if (!id) {
        throw new Error("There is no ID input");
    }
    await mongoDB();
    const cat = await Cat.find({_id: id});
    if (cat == null) {
        throw new Error("There is no cat with the ID inputted");
    } else {
        return cat;
    }
}

export async function search() { //search bar
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