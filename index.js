const express = require('express');
const mongoose =require('mongoose')
const dotenv = require('dotenv')
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')
const stripeRoute = require('./routes/stripe')
dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    autoIndex: true, //make this also true
}).then(() => console.log("Connected to DB")).catch((err)=>console.log(err))

const app = express();

app.use(express.json());

app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/product",productRoute);
app.use("/api/cart",cartRoute);
app.use("/api/order",orderRoute);
app.use("/api/stripe",stripeRoute);

app.listen( process.env.PORT || 5000,()=>{
    console.log("Local server started at port 5000")
});