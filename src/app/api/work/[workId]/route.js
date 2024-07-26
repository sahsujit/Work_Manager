import Work from "@/model/work";
import { NextResponse } from "next/server";

const { connectDb } = require("@/config/database");


connectDb()

export async function DELETE(request, { params }) {
    try {
        const { id } = params;

        await Work.deleteOne(id);

        return NextResponse.json({
            message: "Work deleted successfully"
        })

    } catch (err) {
        return NextResponse.json({
            message: "Error deleting work"
        })
    }


}

export async function GET(request, { params }) {
    try {
        const { id } = params;
        const work = await Work.findOne(id);
        return NextResponse.json(work);
    } catch (err) {
        return NextResponse.json({
            message: "Error getting work"
        })
    }
}

// export async function PUT(request,{params}){
//     try{
//         const {id}= params;
//         const work = await Work.findById(id);
//         const{title, description} = await request.json();
//         console.log(title, description)
//         work.title = title;
//         work.description = description;
//       const updatedWork =  await work.save();

//         return NextResponse.json(updatedWork)

//     }catch(err){
//         console.log(err)
//         return NextResponse.json({
//             message: "Error updating work"
//         })
//     }
// }





export async function PUT(request, { params }) {
    try {
        const { Id } = params;
        const { title, content, status } = await request.json();

        // Validate input
        if (!title || !content, !status) {
            return NextResponse.json({
                success: false,
                message: 'All fields are required',
            });
        }
        let work = await Work.findOne(Id);

        if (!work) {
            return NextResponse.json({
                success: false,
                message: 'work not found',
            });
        }

        // Update user details
        work.title = title;
        work.status = status
        work.content = content;  // Ideally, hash this password before saving
       

        const updatedWork = await work.save();

        return NextResponse.json({
            success: true,
            data: updatedWork,
        });

    } catch (err) {
        console.log('Error updating work:', err);
        return NextResponse.json({
            success: false,
            message: err.message,
        });
    }
}