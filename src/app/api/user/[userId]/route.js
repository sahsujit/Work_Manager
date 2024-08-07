import { connectDb } from "@/config/database";
import User from "@/model/user";
import { NextResponse } from "next/server";

connectDb()

export async function DELETE(request, { params }) {
    try {
        const { userId } = params;
        await User.deleteOne({ _id: userId });
        const response = NextResponse.json({
            success: true,
            message: "User deleted successfully"
        });
        response.cookies.set("token", "",{
            expiresIn: new Date(0)
        });
        return response
    } catch (err) {
        return NextResponse.json({
            success: false,
            message: err.message
        });
    }
}


export async function GET(request,{params}){
    try{
        const {userId} = params;
        const user = await User.findById(userId);
        console.log("user", user)
        return NextResponse.json({
            success:true,
            data:user
           
        })
    }catch(err){
        console.log(err)
        return NextResponse.json({
            success:false,
            message:err.message
        })

    }
}









export async function PUT(request, { params }) {
    try {
        const { userId } = params;
        const { firstName, lastName, password, confirmPassword, about } = await request.json();

        // Validate input
        if (!userId || !firstName || !password || !lastName || !confirmPassword  || !about) {
            return NextResponse.json({
                success: false,
                message: 'All fields are required',
            });
        }

        // Find user by ID
        let user = await User.findById(userId);
        if (!user) {
            return NextResponse.json({
                success: false,
                message: 'User not found',
            });
        }

        // Update user details
        user.firstName = firstName;
        user.lastName = lastName;
        user.password = password;
        user.confirmPassword = confirmPassword;
        user.about = about
         // Ideally, hash this password before saving
       

        const updatedUser = await user.save();

        return NextResponse.json({
            success: true,
             updatedUser,
        });

    } catch (err) {
        console.log('Error updating user:', err);
        return NextResponse.json({
            success: false,
            message: err.message,
        });
    }
}