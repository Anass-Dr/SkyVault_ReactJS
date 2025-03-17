import axiosInstance from "../config/axios";

class FileService {
  static async getFiles() {
    const response = await axiosInstance.get("/files");
    return response.data;
  }

  static async deleteFile(key: string) {
    console.log(key);
    const response = await axiosInstance.delete(`/files/${encodeURIComponent(key)}`);
    return response.data;
  }

  static async uploadFile(formData: FormData) {
    const response = await axiosInstance.post("/files", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  }
}

export default FileService;
