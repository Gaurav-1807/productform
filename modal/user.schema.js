const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title : String,
    dis:String,
    date: String,
    ind:{
        type: String,
        enum: ["low", "medium", "high"],
        default: "medium", 
    }
});

const productSchema = mongoose.model("Product", schema)
module.exports = productSchema