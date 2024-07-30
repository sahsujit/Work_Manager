import { apiConnector } from "@/config/apiConnector";
import { toast } from "react-hot-toast";


export async function signUp(formData){
    const toastId = toast.loading("Creating User...");
    try{
        const response = await apiConnector.post("/api/user", formData)
        return response.data
        
        
    }catch (err) {
        console.error("Error in  creating User:", err);
        toast.error(err.response.data.message);
        throw err;
    } finally {
        toast.dismiss(toastId);
    }

}

export async function userLogin(formData){
    const toastId = toast.loading("Logging In...");
    try{
        const response = await apiConnector.post("/api/login", formData)
        return response.data


    }catch(err){
        console.error("Error in Login:", err);
        toast.error(err.response.data.message);
        throw err;
    }
    finally {
        toast.dismiss(toastId);
    }
}



export async function existingUser(){

        const response = await apiConnector.get("/api/currentUser")
        // console.log(response.data)
        return response.data


   
    
}


export async function logout(){

    const response = await apiConnector.post("/api/logout")
    return response.data




}



