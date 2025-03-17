import { useRef } from "react";
import { Link } from "react-router-dom";
import FileService from "../services/FileService";

function SideBar() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      await FileService.uploadFile(formData);
    }
  };

  return (
    <div className="iq-sidebar sidebar-default">
      <div className="iq-sidebar-logo d-flex align-items-center justify-content-between">
        <a href="index.html" className="header-logo">
          <img
            src="../assets/images/logo.png"
            className="img-fluid rounded-normal light-logo"
            alt="logo"
          />
        </a>
        <div className="iq-menu-bt-sidebar">
          <i className="las la-bars wrapper-menu"></i>
        </div>
      </div>
      <div className="data-scrollbar" data-scroll="1">
        <div className="new-create select-dropdown input-prepend input-append">
          <div className="btn-group">
            <div data-toggle="dropdown">
              <div className="search-query selet-caption" style={{ cursor: "pointer" }}>
                <i className="las la-plus pr-2"></i>Create New
              </div>
              <span className="search-replace"></span>
              <span className="caret"></span>
            </div>
            <ul className="dropdown-menu">
              <li style={{ cursor: "pointer" }}>
                <div className="item">
                  <i className="ri-folder-add-line pr-3"></i>New Folder
                </div>
              </li>
              <li onClick={() => fileInputRef.current?.click()} style={{ cursor: "pointer" }}>
                <div className="item">
                  <input
                    type="file"
                    className="hidden"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                  />
                  <i className="ri-file-upload-line pr-3"></i>Upload File
                </div>
              </li>
            </ul>
          </div>
        </div>
        <nav className="iq-sidebar-menu">
          <ul id="iq-sidebar-toggle" className="iq-menu">
            <li className="active">
              <Link to="/" className="">
                <i className="las la-home iq-arrow-left"></i>
                <span>Dashboard</span>
              </Link>
              <ul
                id="dashboard"
                className="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              ></ul>
            </li>
            <li className=" ">
              <a
                href="#mydrive"
                className="collapsed"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <i className="las la-hdd"></i>
                <span>My Drive</span>
                <i className="las la-angle-right iq-arrow-right arrow-active"></i>
                <i className="las la-angle-down iq-arrow-right arrow-hover"></i>
              </a>
              <ul
                id="mydrive"
                className="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              >
                <li className=" ">
                  <a href="page-alexa.html">
                    <i className="lab la-blogger-b"></i>
                    <span>Alexa Workshop</span>
                  </a>
                </li>
                <li className=" ">
                  <a href="page-android.html">
                    <i className="las la-share-alt"></i>
                    <span>Android</span>
                  </a>
                </li>
                <li className=" ">
                  <a href="page-brightspot.html">
                    <i className="las la-icons"></i>
                    <span>Brightspot</span>
                  </a>
                </li>
                <li className=" ">
                  <a href="page-ionic.html">
                    <i className="las la-icons"></i>
                    <span>Ionic Chat App</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className=" ">
              <Link to="/files" className="">
                <i className="lar la-file-alt iq-arrow-left"></i>
                <span>Files</span>
              </Link>
              <ul
                id="page-files"
                className="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              ></ul>
            </li>
          </ul>
        </nav>
        <div className="sidebar-bottom">
          <h4 className="mb-3">
            <i className="las la-cloud mr-2"></i>Storage
          </h4>
          <p>17.1 / 20 GB Used</p>
          <div className="iq-progress-bar mb-3">
            <span
              className="bg-primary iq-progress progress-1"
              data-percent="67"
            ></span>
          </div>
          <p>75% Full - 3.9 GB Free</p>
          <a href="#" className="btn btn-outline-primary view-more mt-4">
            Buy Storage
          </a>
        </div>
        <div className="p-3"></div>
      </div>
    </div>
  );
}

export default SideBar;
