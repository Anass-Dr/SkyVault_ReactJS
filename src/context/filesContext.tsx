import { createContext, useState, useEffect } from "react";
import { FileType } from "../types";
import FileService from "../services/FileService";
import { useAuth } from "react-oidc-context";

type FilesContextType = {
  files: FileType[];
  setFiles: React.Dispatch<React.SetStateAction<FileType[]>>;
};

export const FilesContext = createContext<FilesContextType>({
  files: [],
  setFiles: () => {},
});

export const FilesProvider = ({ children }: { children: React.ReactNode }) => {
  const [files, setFiles] = useState<FileType[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;
    const fetchFiles = async () => {
      const files = await FileService.getFiles(user?.profile.sub || "");
      setFiles(files);
    };
    fetchFiles();
  }, [user]);

  return (
    <FilesContext.Provider value={{ files, setFiles }}>
      {children}
    </FilesContext.Provider>
  );
};
