import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    }
})

const Product = mongoose.models.Product || mongoose.model("Product",productSchema)

export default Product;