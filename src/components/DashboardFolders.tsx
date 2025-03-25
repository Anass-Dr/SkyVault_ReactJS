import FolderCard from "./FolderCard";

export default function DashboardFolders() {
  return (
    <>
      <div className="col-lg-12">
        <div className="card card-block card-stretch card-transparent">
          <div className="card-header d-flex justify-content-between pb-0">
            <div className="header-title">
              <h4 className="card-title">Folders</h4>
            </div>
            <div className="card-header-toolbar d-flex align-items-center">
              <div className="dropdown">
                <span
                  className="dropdown-toggle dropdown-bg btn bg-white"
                  id="dropdownMenuButton1"
                  data-toggle="dropdown"
                >
                  Name<i className="ri-arrow-down-s-line ml-1"></i>
                </span>
                <div
                  className="dropdown-menu dropdown-menu-right shadow-none"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <a className="dropdown-item" href="#">
                    Last modified
                  </a>
                  <a className="dropdown-item" href="#">
                    Last modifiedby me
                  </a>
                  <a className="dropdown-item" href="#">
                    Last opened by me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {Array.from({ length: 4 }).map((_, index) => (
        <FolderCard key={index} />
      ))}
    </>
  );
}
