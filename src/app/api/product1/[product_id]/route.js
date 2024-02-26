import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { Product } from "@/lib/model/product";
import connectMongoDB from "@/lib/mongodb";


export async function PUT(request,content){
    const productId = content.params.product_id
    const filter = {_id:productId}
    const payload = await request.json()
    // console.log(payload);

    await connectMongoDB();
    
    const result = await Product.findOneAndUpdate(filter,payload)
    return NextResponse.json({result,success:true})
}
export async function GET(request,content){
    await connectMongoDB();   
    // console.log(content)
    let productId = content.params.product_id
    productId = {_id:productId}
    const result = await Product.findById(productId)
    return NextResponse.json({result,success:true})
}

export async function DELETE(request,content){
    let productId = content.params.product_id
    productId = {_id:productId}
    await connectMongoDB();
    const result = await Product.deleteOne(productId)
    return NextResponse.json({result,success:true})
}