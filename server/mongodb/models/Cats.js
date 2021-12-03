import mongoose from "mongoose";
const { Schema } = mongoose;

const CatsSchema = new Schema({
    name: String,
    image: String,
    age: Number,
    location: String,
    breed: String,
    isAdopted: Boolean
})

export default mongoose.models.Cats ?? mongoose.model("Cats", CatsSchema);