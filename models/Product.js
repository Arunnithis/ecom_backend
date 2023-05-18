const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const ProductSchema = new mongoose.Schema({
    title :{
        type :String,
        required :true,
        unique : true
    },
    desc : {
        type :String,
        required :true,
        unique : true
    },
    img : {
        type :String,
        required :true
    },
    categories : {
        type : Array,
        default : false
    },
    size : {
        type :String,
    },
    color : {
        type :String,
    },
    price : {
        type :Number,
        required :true
    }
},{timestamps: true});

ProductSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Product",ProductSchema);