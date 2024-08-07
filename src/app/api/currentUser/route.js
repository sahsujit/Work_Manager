import User from "@/model/user";
import jwt  from "jsonwebtoken"
import { NextResponse } from "next/server";

export async function GET(request){
    const token = request.cookies.get("token")?.value;

    const data = jwt.verify(token, process.env.JWT_SECRET)

    const user = await User.findById({
        _id: data.id
    }).select("-password -confirmPassword")
    // console.log(user)
    return NextResponse.json(user)
}


