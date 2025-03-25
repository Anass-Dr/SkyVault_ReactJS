import { useState, useContext } from "react";
import FileCard from "../components/FileCard";
import FileService from "../services/FileService";
import FileItem from "../components/FileItem";
import { FilesContext } from "../context/filesContext";
import { LoaderContext } from "../context/loaderContext";
import FileSharing from "../components/FileSharing";
import { useAuth } from "react-oidc-context";

function FilesPage() {
  const { files, setFiles } = useContext(FilesContext);
  const [view, setView] = useState<"grid" | "list">("list");
  const [showSharing, setShowSharing] = useState(false);
  const [selectedFile, setSelectedFile] = useState("");
  const { setIsLoading } = useContext(LoaderContext);
  const { user } = useAuth()

  const handleDelete = async (id: string) => {
    setIsLoading(true);
    await FileService.deleteFile(id, user?.profile.sub as string);
    setFiles(files.filter((file) => file.name !== id));
    setIsLoading(false);
  };

  const handleShare = (id: string) => {
    setShowSharing(true);
    setSelectedFile(id);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="d-flex align-items-center justify-content-between welcome-content mb-3">
            <h4>All Files</h4>
            <div className="d-flex align-items-center">
              <div className="list-grid-toggle mr-4" style={{ cursor: "pointer" }}>
                <span
                  className={`icon i-grid ${view === "grid" ? "icon-grid" : ""} cursor-pointer`}
                  onClick={() => setView("list")}
                >
                  <i className="ri-layout-grid-line font-size-20"></i>
                </span>
                <span
                  className={`icon i-list ${view === "grid" ? "icon-grid" : ""} cursor-pointer`}
                  onClick={() => setView("grid")}
                >
                  <i className="ri-list-check font-size-20"></i>
                </span>
                <span className="label label-list">List</span>
              </div>
              <div className="dashboard1-dropdown d-flex align-items-center">
                <div className="dashboard1-info rounded">
                  <a
                    href="#calander"
                    className="collapsed"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <i className="ri-arrow-down-s-line"></i>
                  </a>
                  <ul
                    id="calander"
                    className="iq-dropdown collapse list-inline m-0 p-0 mt-2"
                  >
                    <li className="mb-2">
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Calander"
                      >
                        <i className="las la-calendar iq-arrow-left"></i>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Keep"
                      >
                        <i className="las la-lightbulb iq-arrow-left"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Tasks"
                      >
                        <i className="las la-tasks iq-arrow-left"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`icon i-grid ${view === "grid" ? "icon-grid" : ""}`}>
        <div className="row">
          {files.map((file, index) => (
            <FileCard key={index} file={file} />
          ))}
        </div>
      </div>
      <div className={`icon i-list ${view === "grid" ? "icon-grid" : ""}`}>
        <div className="row">
          <div className="col-lg-12">
            <div className="card card-block card-stretch card-height">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table mb-0 table-borderless tbl-server-info">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Owner</th>
                        <th scope="col">Last Edit</th>
                        <th scope="col">File Size</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {files.map((file, index) => (
                        <FileItem
                          key={index}
                          file={file}
                          onDelete={() => handleDelete(file.name)}
                          onShare={() => handleShare(file.name)}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showSharing && (
        <FileSharing
          onClose={() => setShowSharing(false)}
          fileId={selectedFile}
        />
      )}
    </div>
  );
}

export default FilesPage;
