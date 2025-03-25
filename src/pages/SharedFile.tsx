import { useNavigate, useParams } from "react-router-dom";
import withAuth from "../components/WithAuth";
import { useContext, useEffect, useState } from "react";
import { LoaderContext } from "../context/loaderContext";
import FileService from "../services/FileService";
import { useAuth } from "react-oidc-context";
import FilePreview from "../components/FilePreview";

function SharedFile() {
  const { fileKey } = useParams();
  const [blob, setBlob] = useState<Blob | null>(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const getSharedFile = async () => {
      if (!fileKey) return;
      try {
        const blob = await FileService.getSharedFileByPermission(
          fileKey,
          user?.profile.sub || ""
        );
        if (!blob) {
          navigate("/404");
          return;
        }
        setBlob(blob);
      } catch (error) {
        console.error("Error fetching shared file:", error);
        navigate("/404");
      }
    };
    getSharedFile();
  }, [fileKey, user, navigate]);

  if (!blob) return null;
  return <FilePreview blob={blob} fileKey={fileKey} />;
}

export default withAuth(SharedFile);
