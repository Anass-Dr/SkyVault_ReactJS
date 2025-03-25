import { FileType } from "../types";
import FileDropDown from "./FileDropDown";

function FileItem({
  file,
  onDelete,
  onShare,
}: {
  file: FileType;
  onDelete: () => void;
  onShare: () => void;
}) {
  return (
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <div className="icon-small bg-danger rounded mr-3">
            <i className="ri-file-download-line"></i>
          </div>
          <div
            data-load-file="file"
            data-load-target="#resolte-contaniner"
            data-url={file.url}
            data-toggle="modal"
            data-target="#exampleModal"
            data-title={file.name}
            style={{ cursor: "pointer" }}
          >
            {file.name}
          </div>
        </div>
      </td>
      <td>{file.isShared ? file.sharedBy : "Me"}</td>
      <td>{new Date(file.lastModified as string).toLocaleString()}</td>
      <td>{(file.size / 1024).toFixed(2)} KB</td>
      <td>
        <FileDropDown
          onDelete={onDelete}
          id={file.name}
          onShare={onShare}
          isShared={file.isShared}
        />
      </td>
    </tr>
  );
}

export default FileItem;
