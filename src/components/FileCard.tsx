import { FileType } from "../types";
import { docImg, pdfImg, xlsxImg, pptImg, pngImg, fileImg } from "./index";
import { useNavigate } from "react-router-dom";

const fileTypes = {
  doc: docImg,
  pdf: pdfImg,
  xlsx: xlsxImg,
  ppt: pptImg,
  png: pngImg,
};

function FileCard({ file }: { file: FileType }) {
  const navigate = useNavigate();

  const handleDownload = () => navigate(`/file/${file.name}`);

  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="card card-block card-stretch card-height">
        <div className="card-body image-thumb">
          <div className="mb-4 text-center p-3 rounded iq-thumb">
            <div className="iq-image-overlay"></div>
            <div
              className="iq-thumb-icon d-flex align-items-center justify-content-center"
              style={{ cursor: "pointer" }}
              onClick={handleDownload}
            >
              <img src={fileTypes[file.type as keyof typeof fileTypes] || fileImg} className="img-fluid" />
            </div>
          </div>
          <h6>{file.name}</h6>
        </div>
      </div>
    </div>
  );
}

export default FileCard;
