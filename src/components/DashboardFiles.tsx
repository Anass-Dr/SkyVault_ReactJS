import { Link } from "react-router-dom";
import { FileType } from "../types";
import FileCard from "./FileCard";

function DashboardFiles({ files }: { files: FileType[] }) {
  return (
    <>
      <div className="col-lg-12">
        <div className="card card-block card-stretch card-transparent">
          <div className="card-header d-flex justify-content-between pb-0">
            <div className="header-title">
              <h4 className="card-title">Files</h4>
            </div>
            <div className="card-header-toolbar d-flex align-items-center">
              <Link to="/files" className="view-more">
                View All
              </Link>
            </div>
          </div>
        </div>
      </div>
      {files.map((file, key) => (
        <FileCard key={key} file={file} />
      ))}
    </>
  );
}

export default DashboardFiles;
