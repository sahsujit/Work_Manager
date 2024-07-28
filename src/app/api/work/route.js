import { connectDb } from "@/config/database";
import  Work  from "@/model/work";
import { NextResponse } from "next/server";
connectDb()

export async function POST(request){
    try{
        const {title, content, user} =await request.json();

        const work = new Work({
            title,
            content,
            user,
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