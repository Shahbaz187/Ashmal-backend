import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import { passModel } from './models/passmodel.js'

dotenv.config()
await mongoose.connect("mongodb+srv://shahbazansari8998:aRfKENwql8bxbGH0@portfolio.u4rpgss.mongodb.net/contact")

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(cors())

app.post('/' , async(req , res) =>{
    try {
        const passDB = new passModel(req.body)
        const savedData = await passDB.save()
        res.send(savedData)
    } catch (error) {
        console.log(error);
    }
})
app.get('/' , async(req , res) =>{
    try {
        const allData = await passModel.find({})
        res.json(allData)
    } catch (error) {
        console.log(error);
    }
})
app.listen(port , () =>{
    console.log(`your server is runing on ${port}`);
})
