import { useNavigate, useParams } from "react-router-dom";
import FilePreview from "../components/FilePreview";
import withAuth from "../components/WithAuth";
import { useEffect, useState } from "react";
import FileService from "../services/FileService";
import { useAuth } from "react-oidc-context";

function File() {
  const { fileKey } = useParams();
  const { user } = useAuth();
  const [blob, setBlob] = useState<Blob | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFile = async () => {
      if (!fileKey) return;

      try {
        const blob = await FileService.getFile(
          fileKey,
          user?.profile.sub || ""
        );
        if (!blob) {
          navigate("/404");
          return;
        }
        setBlob(blob);
      } catch (error) {
        console.error("Error fetching file:", error);
      }
    };

    fetchFile();
  }, [fileKey, user, navigate]);

  if (!blob) return null;

  return <FilePreview blob={blob} fileKey={fileKey} />;
}

export default withAuth(File);
