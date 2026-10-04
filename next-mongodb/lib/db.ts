import mongoose from "mongoose";

export async function connectDB(){
    await mongoose.connect("mongodb://localhost:27017/rohithkumar")
    console.log("MongoDB connected!")
}