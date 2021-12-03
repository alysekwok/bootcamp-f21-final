import mongoose from "mongoose";
import { interopDefault } from "next/dist/server/load-components";

const { Schema } = mongoose;

const CatsSchema = new Schema({
    name: String,
    image: URL,
    age: Number,
    location: String,
    breed: String,
    isAdopted: Boolean
})

export default mongoose.models.Cats ?? mongoose.model("Cat", CatSchema);