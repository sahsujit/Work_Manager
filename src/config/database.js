import mongoose from "mongoose";


export const  connectDb = () =>{
    mongoose.connect(process.env.MONGODB_URL ,{
        
    })
    .then(()=>console.log("Db  Connected Successfully"))
    .catch((err)=>{
        console.log(err)
        console.log("DB connection failed")
        process.exit(1)
    })
}





