import Work from "@/model/work";
import { NextResponse } from "next/server";

export async function GET(request,{params}){
    try{
        const {userId} = params;
        const work =await Work.find({
            user:userId
        }).populate("user").exec()

        return NextResponse.json(work)

    }catch(err){
        return NextResponse.json(err)
    }
}


