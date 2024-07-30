
import { apiConnector } from "@/config/apiConnector";
import { toast } from "react-hot-toast";

export async function addTask(task) {
    const toastId = toast.loading("Loading...");
    try {
        const response = await apiConnector.post("/api/work", task);
       
        // console.log(response.data);
        return response.data;
    } catch (err) {
        console.error("Error adding task:", err);
        toast.error("Failed to add task. Please try again.");
        throw err;
    } finally {
        toast.dismiss(toastId);
    }
}



export async function fetchTask(userId) {
    const toastId = toast.loading("Loading...");
    try {
        const response = await apiConnector.get(`/api/user/${userId}/work`);
       
        // console.log(response.data);
        return response.data;
    } catch (err) {
        console.error("Error in fetching task:", err);
        toast.error("Failed to fetch task. Please try again.");
        throw err;
    } finally {
        toast.dismiss(toastId);
    }
}




export async function deleteTask(workId) {
    const toastId = toast.loading("Loading...");
    try {
        const response = await apiConnector.delete(`/api/work/${workId}`);
       
        // console.log(response.data);
        return response.data;
    } catch (err) {
        console.error("Error in deleting task:", err);
        toast.error("Failed to delete task. Please try again.");
        throw err;
    } finally {
        toast.dismiss(toastId);
    }
}

