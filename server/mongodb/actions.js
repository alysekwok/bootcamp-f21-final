import mongoDB from "./index"
import Cat from "./models/Cat"
import Adoption from "./models/Adoption"

// server/mongodb/index.js

export async function findCat() {
    await mongoDB()
    const cat = await Cat.find({});
    console.log(cat)
    return cat
  }

  export async function findCatByName(name) {
    await mongoDB()
    const specificCat = await Cat.find({}).where('name').equals(name);
    console.log(spcecificCat)
    return specificCat
  }



export async function fillForm(name, location, email, phone, id) {
    await mongoDB()
    const form = await Adoption.create(name, location, email, phone, id);
}