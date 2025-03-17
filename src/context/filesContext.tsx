import { createContext, useState, useEffect } from "react";
import { FileType } from "../types";
import FileService from "../services/FileService";

type FilesContextType = {
  files: FileType[];
  setFiles: (files: FileType[]) => void;
};

export const FilesContext = createContext<FilesContextType>({
  files: [],
  setFiles: () => {},
});

export const FilesProvider = ({ children }: { children: React.ReactNode }) => {
  const [files, setFiles] = useState<FileType[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const files = await FileService.getFiles();
      setFiles(files);
    };
    fetchFiles();
  }, []);

  return (
    <FilesContext.Provider value={{ files, setFiles }}>
      {children}
    </FilesContext.Provider>
  );
};
