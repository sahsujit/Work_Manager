import { connectDb } from "@/config/database";
import  Work  from "@/model/work";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"
connectDb()

export async function POST(request){
    try{

        const token = request.cookies.get("token")?.value;

        const data = jwt.verify(token, process.env.JWT_SECRET)
        console.log(data)
    
        const {title, content, user,status} =await request.json();

        const work = new Work({
            title,
            content,
            user:data.id,
            status
        })

        await work.save()
        return NextResponse.json({
            success:true,
            work
        })


    }catch(err){
        console.log(err)
        return NextResponse.json({
            success:false,
            message:err.message
        })
    }


}


export async function GET(request){
    try{
        const works = await Work.find()
        return NextResponse.json({
            success:true,
            works
        })
    }catch(err){
        console.log(err)
        return NextResponse.json({
            success:false,
            message:err.message
        })
    }
}