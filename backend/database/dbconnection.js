import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { seedDoctors } from "./seedData.js";

let mongoServer;

export const dbconnection = async () => {
    try {
        mongoServer = await MongoMemoryServer.create();
        const mongoUri = mongoServer.getUri();
        
        await mongoose.connect(mongoUri, {
            dbName: "MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM"
        });
        
        console.log("Connected to local memory database! Data resets on server restart.");
        await seedDoctors();
    } catch (err) {
        console.log(`Some error occurred while connecting to database: ${err}`);
    }
};