export default function FolderCard() {
  return (
    <div className="col-md-6 col-sm-6 col-lg-3">
      <div className="card card-block card-stretch card-height">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <a href="page-alexa.html" className="folder">
              <div className="icon-small bg-danger rounded mb-4">
                <i className="ri-file-copy-line"></i>
              </div>
            </a>
            <div className="card-header-toolbar">
              <div className="dropdown">
                <span
                  className="dropdown-toggle"
                  id="dropdownMenuButton2"
                  data-toggle="dropdown"
                >
                  <i className="ri-more-2-fill"></i>
                </span>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <a className="dropdown-item" href="#">
                    <i className="ri-eye-fill mr-2"></i>View
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="ri-delete-bin-6-fill mr-2"></i>Delete
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="ri-pencil-fill mr-2"></i>Edit
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="ri-printer-fill mr-2"></i>Print
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="ri-file-download-fill mr-2"></i>Download
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a href="page-alexa.html" className="folder">
            <h5 className="mb-2">Alexa Workshop</h5>
            <p className="mb-2">
              <i className="lar la-clock text-danger mr-2 font-size-20"></i>
              10 Dec, 2020
            </p>
            <p className="mb-0">
              <i className="las la-file-alt text-danger mr-2 font-size-20"></i>
              08 Files
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
