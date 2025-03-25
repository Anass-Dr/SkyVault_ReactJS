import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FileService from "../services/FileService";
import { fileDownload } from "../utils";
import { LoaderContext } from "../context/loaderContext";
import { useAuth } from "react-oidc-context";

function FileDropDown({
  id,
  onDelete,
  onShare,
  isShared,
}: {
  id: string;
  onDelete: () => void;
  onShare: () => void;
  isShared: boolean;
}) {
  const { setIsLoading } = useContext(LoaderContext);
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleDownload = async () => {
    setIsLoading(true);
    const response = await FileService.getFile(id, user?.profile.sub || "");
    fileDownload(response, id);
    setIsLoading(false);
  };

  const handleView = () => navigate(`/file/${isShared ? "d/" : ""}${id}`);

  return (
    <div className="dropdown" style={{ cursor: "pointer" }}>
      <span
        className="dropdown-toggle"
        id="dropdownMenuButton10"
        data-toggle="dropdown"
      >
        <i className="ri-more-fill"></i>
      </span>
      <div
        className="dropdown-menu dropdown-menu-right"
        aria-labelledby="dropdownMenuButton10"
      >
        <button className="dropdown-item" onClick={handleDownload}>
          <i className="ri-file-download-fill mr-2"></i>
          Download
        </button>
        <button className="dropdown-item" onClick={handleView}>
          <i className="ri-eye-fill mr-2"></i>
          View
        </button>
        {!isShared && (
          <>
            <button className="dropdown-item" onClick={onShare}>
              <i className="ri-share-fill mr-2"></i>
              Share
            </button>
            <button className="dropdown-item text-danger" onClick={onDelete}>
              <i className="ri-delete-bin-6-fill mr-2"></i>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default FileDropDown;
