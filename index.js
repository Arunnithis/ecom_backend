const express = require('express');
const mongoose =require('mongoose')
const dotenv = require('dotenv')
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    autoIndex: true, //make this also true
}).then(() => console.log("Connected to DB")).catch((err)=>console.log(err))

const app = express();

app.use(express.json());

app.use("/api/user",userRoute);
app.use("/api/auth",authRoute);

app.listen( process.env.PORT || 5000,()=>{
    console.log("Local server started at port 5000")
});