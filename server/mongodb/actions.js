import mongoDB from "./index"
import Cat from "./models/Cat"
import Adoption from "./models/Adoption"

// server/mongodb/index.js

export async function findCat() {
  await mongoDB()
  const cat = await Cat.find({});
  return cat
}

export async function findCatByID(id) {
  await mongoDB()
  const cat = await Cat.find({}).where('_id').equals(id);
  return cat
}


export async function fillForm(name, location, email, phone, id) {
  await mongoDB()
  const form = await Adoption.create(name, location, email, phone, id);
}

export async function findForm() {
  await mongoDB()
  const form = await Adoption.find({});
  return form
}