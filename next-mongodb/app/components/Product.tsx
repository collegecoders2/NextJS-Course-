"use client"
import { createProduct } from "../actions/productActions"
import { useActionState } from "react"
import Submit from "@/app/components/Submit"
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

export default function Product(){

    const initialState: ProductType = {
        success:false,
        message:""
    }

    const [state, formAction] = useActionState(
        createProduct,
        initialState
    )

   
    return (
        <div>
            <form action={formAction}>
                <input type="text" name="name" placeholder="Enter Product Name:"/>
                <input type="text" name="price" placeholder="Enter Product Price:"/>
                <input type="text" name="quantity" placeholder="Enter Product Quantity:"/>
                <input type="text" name="category" placeholder="Enter Product Category:"/>
                <Submit/>
            </form>

            <div>
                {
                    state?.message && (
                        <h1>{state.message}</h1>

                    )
                }
            </div>

            {
                state?.product && (
                    <div>
                        <h2>{state.product.name}</h2>
                        <h2>{state.product.price}</h2>
                        <h2>{state.product.quantity}</h2>
                        <h2>{state.product.category}</h2>
                    </div>
                )
            }
        </div>
    )
}