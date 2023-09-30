const express = require('express')

const mongoose = require("mongoose")

const dotenv = require("dotenv")

const cors = require("cors")

const connectDb = require("./Config/db")
const routes = require("./Routes/todoRouter")


//rest object
const app = express()

app.use(express.json())
app.use(cors())

//Dotenv config
dotenv.config()

//MONGODATA BASE CONNECT
connectDb()

//PORT
const PORT = process.env.PORT || 8200

//Routes
app.use(routes)
//Listen

app.listen(PORT, () =>{
    console.log(`My server is running on PORT ${process.env.PORT}`)
})

