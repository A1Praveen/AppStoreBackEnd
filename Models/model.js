const mongoose = require("mongoose")

const appSchema=new mongoose.Schema({
    name:String,
    image:String,
    category:String,
},{collection:"Store"})

const appmodel = mongoose.model('',appSchema)

module.exports=appmodel