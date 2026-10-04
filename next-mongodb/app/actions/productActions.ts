"use server"
import { connectDB } from "@/lib/db";
import Product from "@/models/Product";

type ProductType = {
    success:boolean,
    message:string,
    product?:{
        _id: string,
        name:string,
        price:number,
        quantity:number,
        category:string
    }
}

export async function createProduct(
    previousState:ProductType,
    formData:FormData
){

    await connectDB();
    const name = formData.get("name");
    const price = formData.get("price");
    const quantity = formData.get("quantity");
    const category = formData.get("category");

    if(!name || !price || !quantity || !category){
        return ({
            success:false,
            message:"ALL FIELDS ARE REQUIRED!"
        })
    }

    if(Number(price) <= 0){
        return({
            success:false,
            message:"Price cannot be negative!"
        })
    }

    if(Number(quantity) <= 0){
        return({
            success:false,
            message:"Quantity cannot be negative!"
        })
    }

    console.log(name,price,quantity,category);

    const product = await Product.create({
        name,
        price: Number(price),
        quantity: Number(quantity),
        category
    })
    
    return({
         success:true,
        message:"Product Inserted!",
        product: JSON.parse(JSON.stringify(product))
    })
}