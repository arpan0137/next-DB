import { NextResponse } from "next/server";
import { Product } from "@/lib/model/product";
import connectMongoDB from "@/lib/mongodb";

export async function GET(){
    let data;
    let success;
    try{
        await connectMongoDB();
        data = await Product.find();
        success=true
        // console.log(data)
    }
    catch(error){
        console.log(error)
        data = "error"
        success=false;
    }

    return NextResponse.json({result:data,success})
}

export async function POST(request){
    const payload = await request.json()
    await connectMongoDB();
    let product = new Product(payload) //from postman or another directory
    const data = await product.save()
    let success=true;
    return NextResponse.json({result:data,success});
}