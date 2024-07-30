// import User from "@/model/user";
// import { NextResponse } from "next/server";
// import bcrypt from "bcrypt"
// import jwt from "jsonwebtoken";


// export async function POST(request){
//     try{
//         const {email, password} =await request.json();
//         const user = await User.findOne({email:email});

//         if(!user){
//             throw new Error("User is not registered, please signUp first ");
//         }

//       if(await bcrypt.compare(password, user.password)){
//         const token = jwt.sign(
//             {email:user.email, id:user._id},
//             process.env.JWT_SECRET,
//             {
//                 expiresIn: "48h",
//             }
//         )

//         user.token = token,
//         user.password = undefined
//         console.log(token)

//         const options = {
//             expiresIn: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
//             httpOnly: true,
//           }
        
//           const response = NextResponse.json({
//             message: "User logged in successfully",
//             success:true,
//             user

//           })

//           response.cookies.set("token", token , options);


//           return response;

//       }
//       else{
//         throw new Error("Invalid password");
//       }

      

//     }catch(err){
//         return NextResponse.json({
//             success:false,
//             message:err.message
//         },{status:500})
//     }
// }







import User from "@/model/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { connectDb } from "@/config/database";

connectDb()


export async function POST(request) {
  try {
    const { email, password } = await request.json();
    const user = await User.findOne({ email: email });

    if (!user) {
      throw new Error("User is not registered, please sign up first.");
    }

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { email: user.email, id: user._id },
        process.env.JWT_SECRET,
        {
          expiresIn: "24h",
        }
      );

      // Removing password from the user object
      user.password = undefined;

      const response = NextResponse.json({
        message: "User logged in successfully",
        success: true,
        user,
      });

      response.cookies.set("token", token, {
        expiresIn: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      });

      return response;
    } else {
      throw new Error("Invalid password");
    }
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: err.message,
    }, { status: 500 });
  }
}
