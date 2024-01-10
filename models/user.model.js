import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,

    }
}, { timestamps: true })

const model = mongoose.models.credential || mongoose.model("credential", userSchema); // this way is mendatory in next js

export default model;