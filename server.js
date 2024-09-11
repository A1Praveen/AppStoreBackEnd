const express = require ("express");
const cors = require ("cors")
const mongoose = require ("mongoose");

const dotenv = require ("dotenv");
const router = require("./Routers/route");


dotenv.config()

mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log("Database is connected");
});

const app = express()
app.use(cors())
app.use(express.json())

app.use("/user",router)

app.listen(3000,()=>{
    console.log("server is connected");
});