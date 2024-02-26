"use client"
import "@/app/style.css"
import { useState } from "react"
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page({params}){
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [brand,setBrand] = useState("");
    const [colour,setColour] = useState("");
    const [category,setCategory] = useState("");

    let productId = params.updateproduct;
    useEffect(() => {
          getProductDetails(productId)        
    }, [])
    
    const getProductDetails=async (productId)=>{
        let productData = await fetch("http://localhost:3000/api/product1/"+productId)
        productData = await productData.json();
        let result = productData.result;
        // console.log(result.price)
        if(productData.success){
            setName(result.name)
            setPrice(result.price)
            setBrand(result.brand)
            setColour(result.colour)
            setCategory(result.category)
        }
    }

    const router = useRouter()
    const updateProduct =async ()=>{
        let productData = await fetch("http://localhost:3000/api/product1/"+productId,{
            method:"PUT",
            body:JSON.stringify({name,brand,price,colour,category})
        })   
        productData = await productData.json()
        if(productData.success){
            alert("Product Updated Successfully")
            if(alert.apply){
                router.push("/productlist")
            }
        }
    }

    return (
        <div id="addprd">
            <Link href="/">Home</Link>
            <Link href="/productlist">View Product List</Link>
            <h1>Update Product</h1>
            <input className="input" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Product Name" />
            <input className="input" type="text" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Enter Product Price"/>
            <input className="input" type="text" value={brand} onChange={(e)=>setBrand(e.target.value)} placeholder="Enter Product Brand"/>
            <input className="input" type="text" value={colour} onChange={(e)=>setColour(e.target.value)} placeholder="Enter Product Colour"/>
            <input className="input" type="text" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Enter Product Category"/>
            <button className="btn" onClick={updateProduct} type="submit">Update product</button>
        </div>
    )
}