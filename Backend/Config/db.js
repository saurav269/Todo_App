
const mongoose = require("mongoose")

const connectDb=async()=>{

    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to DB")

    }catch(err){
        console.log(`Mongo database err : ${err}`)
    }

}
module.exports = connectDb