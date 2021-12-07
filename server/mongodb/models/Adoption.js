import mongoose from "mongoose";
import { ObjectID } from "mongodb/node_modules/bson";

const { Schema } = mongoose;

const AdoptionSchema = new Schema({ 
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    id: {
        type: ObjectID,
        required: true,
    },
    isApproved: {
        type: Boolean,
        default: false,
    }
});

export default mongoose.models.Adoption ?? mongoose.model("Adoption", AdoptionSchema);