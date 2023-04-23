// import mongoose from "mongoose";    
const mongoose = require("mongoose")

const connectDB = handler => async (req, res) => {
    if(mongoose.connection[0].readyState){
        return handler(req, res)
    }
    await mongoose.connect('mongodb://localhost:27017', () => {
        console.log("connected")
    })
    return handler(req, res)
}

export default connectDB;