import { useState, useEffect } from "react";
import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LoaderContext } from "../context/loaderContext";
import FileService from "../services/FileService";
import FilePreview from "../components/FilePreview";

export default function SharedLink() {
  const { token } = useParams();
  const { setIsLoading } = useContext(LoaderContext);
  const [fileKey, setFileKey] = useState<string | null>(null);
  const [blob, setBlob] = useState<Blob | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getSharedFile = async () => {
      if (!token) return;
      try {
        setIsLoading(true);
        const { blob, fileKey } = await FileService.getSharedFileByLink(token);
        if (!blob || !fileKey) {
          navigate("/404");
          return;
        }
        setBlob(blob);
        setFileKey(fileKey);
      } catch (error) {
        console.error("Error fetching shared file:", error);
        navigate("/404");
      } finally {
        setIsLoading(false);
      }
    };
    getSharedFile();
  }, [token, setIsLoading, navigate]);

  if (!blob) return null;
  return <FilePreview blob={blob} fileKey={fileKey || ""} />;
}
