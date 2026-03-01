require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routes")

const app = express();
const PORT = 8082;
const DB_URL = `mongodb+srv://rupali:${process.env.password}@tasks.uuzvuuk.mongodb.net/?appName=tasks`

mongoose.connect(DB_URL)
.then(()=>console.log("DB Connected"))
.catch((err)=>console.log("Error in connecting in DB",err));

app.use(cors());
app.use(express.json());
app.use('/tasks',taskRoutes)

app.listen(PORT,()=>{
    console.log(`backend listening on port ${PORT}`)
})