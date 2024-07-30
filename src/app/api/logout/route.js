import { NextResponse } from "next/server";

export async function POST(request){
    const response = NextResponse.json({
        message:"Logged out !!"

    })

    response.cookies.set("token", "",{
        expiresIn: new Date(0)
    });

    return response;
}