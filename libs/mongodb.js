import mongoose from "mongoose";

async function mongoConnect() {
    try {
        await mongoose.connect(process.env.MONGO_KEY)
            .then(() => console.log("Connected to MongoDB"))
            .catch((err) => console.log(err));
    } catch (error) {
        console.log(error);
    }
}

export default mongoConnect;