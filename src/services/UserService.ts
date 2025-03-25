import axiosInstance from "../config/axios";
import { User } from "../types";

export default class UserService {
    static async getAll(userId: string) {
        try {
            const response = await axiosInstance.get(`/users?userId=${encodeURIComponent(userId)}`);
            return response.data as User[];
        } catch (error) {
            console.error("Error fetching users:", error);
            throw error;
        }
    }
}
