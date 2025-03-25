import { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import FileService from "../services/FileService";
import { LoaderContext } from "../context/loaderContext";
import { FilesContext } from "../context/filesContext";
import { useAuth } from "react-oidc-context";
import DashImg from "../assets/images/dashboard.png";
import FilesImg from "../assets/images/document.png";

function SideBar() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { setIsLoading } = useContext(LoaderContext);
  const { setFiles } = useContext(FilesContext);
  const { user } = useAuth();

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      const insertedFile = await FileService.uploadFile(
        formData,
        user?.profile.sub as string
      );
      setFiles((prevFiles) => [insertedFile, ...prevFiles]);
    }
    setIsLoading(false);
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
            <div
              className="search-query selet-caption"
              onClick={() => fileInputRef.current?.click()}
              style={{ cursor: "pointer" }}
            >
              <input
                type="file"
                hidden
                ref={fileInputRef}
                onChange={handleFileUpload}
              />
              <i className="las la-plus pr-2"></i>Upload file
            </div>
          </div>
        </div>
        <nav className="iq-sidebar-menu">
          <ul id="iq-sidebar-toggle" className="iq-menu">
            <li className="active">
              <Link to="/" className="flex">
                <img
                  className="mr-2"
                  src={DashImg}
                  alt=""
                  style={{ width: "16px" }}
                />
                <span>Dashboard</span>
              </Link>
              <ul
                id="dashboard"
                className="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              ></ul>
            </li>
            <li className=" ">
              <Link to="/files" className="">
                <img
                  className="mr-2"
                  src={FilesImg}
                  alt=""
                  style={{ width: "16px" }}
                />
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
