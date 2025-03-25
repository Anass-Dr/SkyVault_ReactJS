import { useContext } from "react";
import { FilesContext } from "../context/filesContext";
import DashboardFiles from "../components/DashboardFiles";
import DashboardFolders from "../components/DashboardFolders";

function Dashboard() {
  const { files } = useContext(FilesContext);
  const latestFilesUploaded = files
    .sort((a, b) => new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime())
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
        {/* <DashboardFolders /> */}
        <DashboardFiles files={latestFilesUploaded} />
        <div className="col-lg-8 col-xl-8">
          <div className="card card-block card-stretch card-height files-table">
            <div className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Files</h4>
              </div>
              <div className="card-header-toolbar d-flex align-items-center">
                <a href="page-files.html" className="view-more">
                  View All
                </a>
              </div>
            </div>
            <div className="card-body pt-0">
              <div className="table-responsive">
                <table className="table mb-0 table-borderless tbl-server-info">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Members</th>
                      <th scope="col">Last Edit</th>
                      <th scope="col">Size</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="icon-small bg-danger rounded mr-3">
                            <i className="ri-file-excel-line"></i>
                          </div>
                          <div
                            data-load-file="file"
                            data-load-target="#resolte-contaniner"
                            data-url="../assets/vendor/doc-viewer/files/demo.pdf"
                            data-toggle="modal"
                            data-target="#exampleModal"
                            data-title="Weekly-report.pdf"
                            style={{ cursor: "pointer" }}
                          >
                            Weekly-report.pdf
                          </div>
                        </div>
                      </td>
                      <td>Me</td>
                      <td>jan 21, 2020 me</td>
                      <td>02 MB</td>
                      <td>
                        <div className="dropdown">
                          <span
                            className="dropdown-toggle"
                            id="dropdownMenuButton6"
                            data-toggle="dropdown"
                          >
                            <i className="ri-more-fill"></i>
                          </span>
                          <div
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="dropdownMenuButton6"
                          >
                            <a className="dropdown-item" href="#">
                              <i className="ri-eye-fill mr-2"></i>View
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="ri-delete-bin-6-fill mr-2"></i>
                              Delete
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="ri-pencil-fill mr-2"></i>Edit
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="ri-printer-fill mr-2"></i>Print
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="ri-file-download-fill mr-2"></i>
                              Download
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="active">
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="icon-small bg-primary rounded mr-3">
                            <i className="ri-file-download-line"></i>
                          </div>
                          <div
                            data-load-file="file"
                            data-load-target="#resolte-contaniner"
                            data-url="../assets/vendor/doc-viewer/files/demo.pdf"
                            data-toggle="modal"
                            data-target="#exampleModal"
                            data-title="VueJs.pdf"
                            style={{ cursor: "pointer" }}
                          >
                            VueJs.pdf
                          </div>
                        </div>
                      </td>
                      <td>Poul Molive</td>
                      <td>jan 25, 2020 Poul Molive</td>
                      <td>64 MB</td>
                      <td>
                        <div className="dropdown">
                          <span
                            className="dropdown-toggle"
                            id="dropdownMenuButton7"
                            data-toggle="dropdown"
                          >
                            <i className="ri-more-fill"></i>
                          </span>
                          <div
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="dropdownMenuButton7"
                          >
                            <a className="dropdown-item" href="#">
                              <i className="ri-eye-fill mr-2"></i>View
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="ri-delete-bin-6-fill mr-2"></i>
                              Delete
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="ri-pencil-fill mr-2"></i>Edit
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="ri-printer-fill mr-2"></i>Print
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="ri-file-download-fill mr-2"></i>
                              Download
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="icon-small bg-info rounded mr-3">
                            <i className="ri-file-excel-line"></i>
                          </div>
                          <div
                            data-load-file="file"
                            data-load-target="#resolte-contaniner"
                            data-url="../assets/vendor/doc-viewer/files/demo.docx"
                            data-toggle="modal"
                            data-target="#exampleModal"
                            data-title="Milestone.docx"
                            style={{ cursor: "pointer" }}
                          >
                            Milestone.docx
                          </div>
                        </div>
                      </td>
                      <td>Me</td>
                      <td>Mar 30, 2020 Gail Forcewind</td>
                      <td>30 MB</td>
                      <td>
                        <div className="dropdown">
                          <span
                            className="dropdown-toggle"
                            id="dropdownMenuButton8"
                            data-toggle="dropdown"
                          >
                            <i className="ri-more-fill"></i>
                          </span>
                          <div
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="dropdownMenuButton8"
                          >
                            <a className="dropdown-item" href="#">
                              <i className="ri-eye-fill mr-2"></i>View
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="ri-delete-bin-6-fill mr-2"></i>
                              Delete
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="ri-pencil-fill mr-2"></i>Edit
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="ri-printer-fill mr-2"></i>Print
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="ri-file-download-fill mr-2"></i>
                              Download
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="icon-small bg-success rounded mr-3">
                            <i className="ri-file-excel-line"></i>
                          </div>
                          <div
                            data-load-file="file"
                            data-load-target="#resolte-contaniner"
                            data-url="../assets/vendor/doc-viewer/files/demo.xlsx"
                            data-toggle="modal"
                            data-target="#exampleModal"
                            data-title="Training center.xlsx"
                            style={{ cursor: "pointer" }}
                          >
                            Training center.xlsx
                          </div>
                        </div>
                      </td>
                      <td>Me</td>
                      <td>Mar 30, 2020 Gail Forcewind</td>
                      <td>10 MB</td>
                      <td>
                        <div className="dropdown">
                          <span
                            className="dropdown-toggle"
                            id="dropdownMenuButton09"
                            data-toggle="dropdown"
                          >
                            <i className="ri-more-fill"></i>
                          </span>
                          <div
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="dropdownMenuButton09"
                          >
                            <a className="dropdown-item" href="#">
                              <i className="ri-eye-fill mr-2"></i>View
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="ri-delete-bin-6-fill mr-2"></i>
                              Delete
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="ri-pencil-fill mr-2"></i>Edit
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="ri-printer-fill mr-2"></i>Print
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="ri-file-download-fill mr-2"></i>
                              Download
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="icon-small bg-warning rounded mr-3">
                            <i className="ri-file-excel-line"></i>
                          </div>
                          <div
                            data-load-file="file"
                            data-load-target="#resolte-contaniner"
                            data-url="../assets/vendor/doc-viewer/files/demo.pptx"
                            data-toggle="modal"
                            data-target="#exampleModal"
                            data-title="Flavour.pptx"
                            style={{ cursor: "pointer" }}
                          >
                            Flavour.pptx
                          </div>
                        </div>
                      </td>
                      <td>Me</td>
                      <td>Mar 30, 2020 Gail Forcewind</td>
                      <td>10 MB</td>
                      <td>
                        <div className="dropdown">
                          <span
                            className="dropdown-toggle"
                            id="dropdownMenuButton9"
                            data-toggle="dropdown"
                          >
                            <i className="ri-more-fill"></i>
                          </span>
                          <div
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="dropdownMenuButton9"
                          >
                            <a className="dropdown-item" href="#">
                              <i className="ri-eye-fill mr-2"></i>View
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="ri-delete-bin-6-fill mr-2"></i>
                              Delete
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="ri-pencil-fill mr-2"></i>Edit
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="ri-printer-fill mr-2"></i>Print
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="ri-file-download-fill mr-2"></i>
                              Download
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card card-block card-stretch card-height">
            <div className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Statistic</h4>
              </div>
            </div>
            <div className="card-body">
              <div id="layout-1-chart" style={{ minHeight: "220px" }}></div>
              <div className="row mt-4">
                <div className="col-lg-6 col-md-6 col-6">
                  <div className="media align-items-center">
                    <div className="icon iq-icon-box bg-primary rounded icon-statistic">
                      <i className="las la-long-arrow-alt-down"></i>
                    </div>
                    <div className="media-body ml-3">
                      <p className="mb-0">Downloads</p>
                      <h5>12,594</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-6">
                  <div className="media align-items-center">
                    <div className="icon iq-icon-box bg-light rounded icon-statistic">
                      <i className="las la-long-arrow-alt-up"></i>
                    </div>
                    <div className="media-body ml-3">
                      <p className="mb-0">Uploads</p>
                      <h5>1,458</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card card-block card-stretch card-height plan-bg">
            <div className="card-body">
              <h4 className="mb-3 text-white">Unlock Your plan</h4>
              <p>
                Expanded Storage, Access To
                <br />
                More Features On CloudBOX
              </p>
              <div className="row align-items-center justify-content-between">
                <div className="col-6 go-white">
                  <a href="#" className="btn d-inline-block mt-5">
                    Go Premium
                  </a>
                </div>
                <div className="col-6">
                  <img
                    src="../assets/images/layouts/mydrive/lock-bg.png"
                    className="img-fluid"
                    alt="image1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="card card-block card-stretch card-height">
            <div className="card-header d-flex justify-content-between pb-0">
              <div className="header-title">
                <h4 className="card-title">Storage</h4>
              </div>
              <div className="card-header-toolbar d-flex align-items-center">
                <div className="dropdown">
                  <span
                    className="dropdown-toggle btn dropdown-bg border border-primary text-primary rounded"
                    id="dropdownMenuButton11"
                    data-toggle="dropdown"
                  >
                    Monthly<i className="ri-arrow-down-s-line ml-1"></i>
                  </span>
                  <div
                    className="dropdown-menu dropdown-menu-right shadow-none"
                    aria-labelledby="dropdownMenuButton11"
                  >
                    <a className="dropdown-item" href="#">
                      Monthly
                    </a>
                    <a className="dropdown-item" href="#">
                      Weekly
                    </a>
                    <a className="dropdown-item" href="#">
                      Yearly
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body pt-0">
              <div id="layout-1-chart2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
