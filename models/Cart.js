const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const CartSchema = new mongoose.Schema({
    userId :{
        type :String,
        required :true,
    },
    products :[
        {
            productId : {
                type:String,
            },
            quantity : {
                type : Number,
                default : 1,
            },
        },
    ]
},{timestamps: true});

CartSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Cart",CartSchema);