import { NextResponse } from 'next/server';
import { connectDb } from '@/config/database';
import User from '@/model/user';  // Import the default export correctly

connectDb();

export async function GET(request) {
    try {
        const users = await User.find().select("-password");
        return NextResponse.json(users);
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: 'Error' }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const { name, email, password, about } = await request.json();

        const user = new User({
            name,
            password,
            email,
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
