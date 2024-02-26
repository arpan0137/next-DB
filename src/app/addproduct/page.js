"use client"
import "@/app/style.css"
import { useState } from "react"
import Link from "next/link";

export default function Page(){
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [brand,setBrand] = useState("");
    const [colour,setColour] = useState("");
    const [category,setCategory] = useState("");
    const addProduct =async ()=>{
        try{

            if(name == "" || price == "" || brand == "" || colour == "" || category == ""){
                alert("Please fill all the fields")
            }
            else{
                let result = await fetch("http://localhost:3000/api/product1",{
                    method:"POST",
                    body:JSON.stringify({name,price,brand,colour,category})
                })
                result = await result.json()
                if(result.success){
                    alert("New product Added")
                }
            }
        }
        catch(error){
            // console.log(error)
            alert(error)
        }
    }
    const clearText = ()=>{
        setName(""),setPrice(""),setBrand(""),setColour(""),setCategory("")
    }
    return (
        <div id="addprd">
            <Link href="/">Home</Link>
            <h1>Add Product</h1>
            <input className="input" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Product Name" />
            <input className="input" type="text" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Enter Product Price"/>
            <input className="input" type="text" value={brand} onChange={(e)=>setBrand(e.target.value)} placeholder="Enter Product Brand"/>
            <input className="input" type="text" value={colour} onChange={(e)=>setColour(e.target.value)} placeholder="Enter Product Colour"/>
            <input className="input" type="text" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Enter Product Category"/>
            <button className="btn" onClick={()=>{addProduct(),clearText()}} type="submit">Add product</button>
        </div>
    )
}