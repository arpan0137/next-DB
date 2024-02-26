"use client"

import { useRouter } from "next/navigation"

export default function DeleteProduct(props){
    const router = useRouter()
    const productId = props.id
    const deleteRecord=async()=>{
        let response = await fetch("http://localhost:3000/api/product1/"+productId,{
            method:"delete"
        })
        response = await response.json();
        if(response.success){
            alert("Product Deleted Successfully")
            router.push("/productlist")
        
        }
    }
    const confirmDelete =async ()=>{
        if(window.confirm("Are you sure you want to delete this Item ?") == true){
            deleteRecord();
        }
    }
    return <button onClick={confirmDelete} >Delete</button>
}