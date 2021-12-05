import mongoDB from "./index"
import Cats from "./models/Cats"

// server/mongodb/index.js

export async function findCats() {
    await mongoDB()
    const cats = await Cats.find({});
    console.log(cats)
    return cats
  }