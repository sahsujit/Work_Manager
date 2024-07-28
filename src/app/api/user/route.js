import { NextResponse } from 'next/server';
import { connectDb } from '@/config/database';
import User from '@/model/user';  // Import the default export correctly
import bcrypt from "bcrypt"
connectDb();

export async function GET(request) {
    try {
        const users = await User.find().select("-password -confirmPassword");
        return NextResponse.json(users);
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: 'Error' }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const { firstName,lastName, email, password,confirmPassword , profileUrl, about } = await request.json();

       
        if(!firstName || !lastName || !email || !password || !confirmPassword  ){
            return  NextResponse.json({
                success:false,
                message:"All fields are required"
            })
        };

        if(password !== confirmPassword){
            return NextResponse.json({
                success:false,
                message:"Password and confirmPassword does not match, please try again"
            })
        };


        const hashedPassword = await bcrypt.hash(password, 10)

        const user = new User({
            firstName,
            lastName,
            password:hashedPassword,
            confirmPassword:hashedPassword,
            email,
            profileUrl :` https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
            about
            
        });

        await user.save();

        return NextResponse.json({
            success: true,
            data: user
        });
    } catch (err) {
        console.log(err);
        return NextResponse.json({
            success: false,
            message: err.message
        }, { status: 500 });
    }
}
