
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
