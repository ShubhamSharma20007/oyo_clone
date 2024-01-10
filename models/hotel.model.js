import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            trim: true,

        },
        description: {
            type: String,
            required: true,

        },
        banner: {
            type: String,
            required: true
        },
        gallery: [{
            type: String
        }],
        price: {
            type: Number,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        facilities: [{
            img: String,
            name: String,
        }],

    }, {
        timestamps: true
    })
    // chekck karo ki models mai hotel name ka schema hai ki nhi ager nhi hai  to  new schema banao
const hotelModel = mongoose.models.hotel || mongoose.model("hotel", hotelSchema)
export default hotelModel;