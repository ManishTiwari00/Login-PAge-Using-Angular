import mongoose from "mongoose";
import { DB_NAME } from "./db.js";
import { configDotenv } from "dotenv";



const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB connected SUCCESS!!! DBHOST ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MONGODB CONNECTION FAILED ! ! ! ",error);
        process.exit(1);

    }
}

export default connectDB;