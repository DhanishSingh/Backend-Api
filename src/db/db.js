import mongoose from "mongoose"
import config from "../config/config.js"

const MONGO_URI = config.MONGO_URI

const connectDB = async()=>{
    try{
        await mongoose.connect(MONGO_URI)
        console.log("Connected to DB")
    }catch (error){
        console.error("Error connecting to DB",error)
    }
}

export default connectDB