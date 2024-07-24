import mongoose from "mongoose";

const passSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
})

export const passModel = mongoose.model('ashmal' , passSchema)