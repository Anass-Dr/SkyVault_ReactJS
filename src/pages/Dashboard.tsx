import { useContext } from "react";
import { FilesContext } from "../context/filesContext";
import DashboardFiles from "../components/DashboardFiles";

function Dashboard() {
  const { files } = useContext(FilesContext);
  const latestFilesUploaded = files
    .sort(
      (a, b) =>
        new Date(b.lastModified as string).getTime() -
        new Date(a.lastModified as string).getTime()
    )
    .slice(0, 4);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="card-transparent card-block card-stretch card-height mb-3">
            <div className="d-flex justify-content-between">
              <div className="select-dropdown input-prepend input-append">
                <div className="btn-group">
                  <div data-toggle="dropdown">
                    <div className="dropdown-toggle search-query">
                      My Drive<i className="las la-angle-down ml-3"></i>
                    </div>
                    <span className="search-replace"></span>
                    <span className="caret"></span>
                  </div>
                  <ul className="dropdown-menu">
                    <li>
                      <div className="item">
                        <i className="ri-folder-add-line pr-3"></i>New Folder
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <i className="ri-file-upload-line pr-3"></i>Upload Files
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <i className="ri-folder-upload-line pr-3"></i>Upload
                        Folders
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="dashboard1-dropdown d-flex align-items-center">
                <div className="dashboard1-info">
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
        <div className="col-lg-8">
          <div
            className="card card-block card-stretch card-height iq-welcome"
            style={{
              background:
                "url(../assets/images/layouts/mydrive/background.png) no-repeat scroll right center",
              backgroundColor: "#ffffff",
              backgroundSize: "contain",
            }}
          >
            <div className="card-body property2-content">
              <div className="d-flex flex-wrap align-items-center">
                <div className="col-lg-6 col-sm-6 p-0">
                  <h3 className="mb-3">Welcome Penny</h3>
                  <p className="mb-5">
                    You have 32 new notifications and 23 unread messages to
                    reply
                  </p>
                  <a href="#">
                    Try Now<i className="las la-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card card-block card-stretch card-height">
            <div className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Quick Access</h4>
              </div>
            </div>
            <div className="card-body">
              <ul className="list-inline p-0 mb-0 row align-items-center">
                <li className="col-lg-6 col-sm-6 mb-3 mb-sm-0">
                  <div
                    data-load-file="file"
                    data-load-target="#resolte-contaniner"
                    data-url="../assets/vendor/doc-viewer/files/demo.pdf"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    data-title="Product-planning.pdf"
                    style={{ cursor: "pointer" }}
                    className="p-2 text-center border rounded"
                  >
                    <div>
                      <img
                        src="../assets/images/layouts/mydrive/folder-1.png"
                        className="img-fluid mb-1"
                        alt="image1"
                      />
                    </div>
                    <p className="mb-0">Planning</p>
                  </div>
                </li>
                <li className="col-lg-6 col-sm-6">
                  <div
                    data-load-file="file"
                    data-load-target="#resolte-contaniner"
                    data-url="../assets/vendor/doc-viewer/files/demo.docx"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    data-title="Wireframe.docx"
                    style={{ cursor: "pointer" }}
                    className="p-2 text-center border rounded"
                  >
                    <div>
                      <img
                        src="../assets/images/layouts/mydrive/folder-2.png"
                        className="img-fluid mb-1"
                        alt="image2"
                      />
                    </div>
                    <p className="mb-0">Wireframe</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <DashboardFiles files={latestFilesUploaded} />
      </div>
    </div>
  );
}

export default Dashboard;
