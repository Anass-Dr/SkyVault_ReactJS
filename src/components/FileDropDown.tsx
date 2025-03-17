function FileDropDown({ onDelete }: { onDelete: () => void }) {
  return (
    <div className="dropdown">
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
        <a className="dropdown-item" href="#">
          <i className="ri-eye-fill mr-2"></i>View
        </a>
        <a className="dropdown-item" href="#" onClick={onDelete}>
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
  );
}

export default FileDropDown;
