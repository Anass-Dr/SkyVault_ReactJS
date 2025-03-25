import axiosInstance from "../config/axios";
import { FileType } from "../types";

class FileService {
  static async getFiles(userId: string) {
    const response = await axiosInstance.get(`/files/${userId}`);
    return response.data;
  }

  static async deleteFile(key: string, userId: string) {
    const response = await axiosInstance.delete(
      `/files/${encodeURIComponent(key)}/${userId}`
    );
    return response.data;
  }

  static async uploadFile(
    formData: FormData,
    userId: string
  ): Promise<FileType> {
    const response = await axiosInstance.post(`/files/${userId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data.fileData;
  }

  static async getFile(key: string, userId: string) {
    try {
      const response = await axiosInstance.get(
        `/files/${encodeURIComponent(key)}/${encodeURIComponent(userId)}`,
        {
          responseType: "arraybuffer",
        }
      );

      // Get file extension and proper MIME type
      const fileExt = key.split(".").pop()?.toLowerCase() || "";
      const mimeType = getMimeType(fileExt);

      // Create blob with the correct MIME type
      return new Blob([response.data], { type: mimeType });
    } catch (error) {
      console.error("Error fetching file:", error);
      throw error;
    }
  }

  static async getShareLink(key: string, userId: string) {
    try {
      const response = await axiosInstance.get(
        `/files/${encodeURIComponent(key)}/share-link/${userId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching share link:", error);
      throw error;
    }
  }

  static async getSharedFileByPermission(fileKey: string, userId: string) {
    try {
      const response = await axiosInstance.get(
        `/files/shared-permission/${encodeURIComponent(fileKey)}/${userId}`,
        {
          responseType: "arraybuffer",
        }
      );

      // Get file extension and proper MIME type
      const fileExt = fileKey.split(".").pop()?.toLowerCase() || "";
      const mimeType = getMimeType(fileExt);

      // Create blob with the correct MIME type
      return new Blob([response.data], { type: mimeType });
    } catch (error) {
      console.error("Error fetching shared file:", error);
      throw error;
    }
  }

  static async getSharedFileByLink(token: string) {
    try {
      const response = await axiosInstance.get(
        `/files/shared-link/${encodeURIComponent(token)}`
      );

      // Get file extension and proper MIME type
      const fileExt =
        response.data.fileKey.split(".").pop()?.toLowerCase() || "";
      const mimeType = getMimeType(fileExt);

      // Convert base64 to blob
      const binaryData = atob(response.data.fileData);
      const array = new Uint8Array(binaryData.length);
      for (let i = 0; i < binaryData.length; i++) {
        array[i] = binaryData.charCodeAt(i);
      }
      return {
        blob: new Blob([array], { type: mimeType }),
        fileKey: response.data.fileKey,
      };
    } catch (error) {
      console.error("Error fetching shared file:", error);
      throw error;
    }
  }

  static async addPermission(key: string, email: string, userId: string) {
    try {
      const response = await axiosInstance.post(
        `/files/${encodeURIComponent(key)}/permissions/${userId}`,
        { email }
      );
      return response.data;
    } catch (error) {
      console.error("Error adding permission:", error);
      throw error;
    }
  }

  static async removePermission(key: string, email: string, userId: string) {
    try {
      const response = await axiosInstance.delete(
        `/files/${encodeURIComponent(key)}/permissions/${encodeURIComponent(
          email
        )}/${userId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error removing permission:", error);
      throw error;
    }
  }

  static async getPermissions(key: string, userId: string) {
    try {
      const response = await axiosInstance.get(
        `/files/${encodeURIComponent(key)}/permissions/${userId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching permissions:", error);
      throw error;
    }
  }
}

// Helper function for MIME type determination
const getMimeType = (extension: string): string => {
  const mimeTypes: Record<string, string> = {
    pdf: "application/pdf",
    doc: "application/msword",
    docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    xls: "application/vnd.ms-excel",
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ppt: "application/vnd.ms-powerpoint",
    pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    gif: "image/gif",
    txt: "text/plain",
    csv: "text/csv",
  };
  return mimeTypes[extension] || "application/octet-stream";
};

export default FileService;
