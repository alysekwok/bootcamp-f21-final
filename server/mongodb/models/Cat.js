import mongoose from "mongoose";
import { interopDefault } from "next/dist/server/load-components";

const { Schema } = mongoose;

const CatSchema = new Schema({
    name: String,
    image: String,
    age: Number,
    location: String,
    breed: String,
    isAdopted: Boolean
})

export default mongoose.models.Cat ?? mongoose.model("Cat", CatSchema);