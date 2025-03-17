import { File } from "../types";
import { docImg, pdfImg, xlsxImg, pptImg, pngImg } from "./index";

const fileTypes = {
  doc: docImg,
  pdf: pdfImg,
  xlsx: xlsxImg,
  ppt: pptImg,
  png: pngImg,
};
function FileCard({ file }: { file: File }) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="card card-block card-stretch card-height">
        <div className="card-body image-thumb">
          <div className="mb-4 text-center p-3 rounded iq-thumb">
            <div className="iq-image-overlay"></div>
            <a
              href="#"
              data-title={file.name}
              data-load-file="file"
              data-load-target="#resolte-contaniner"
              data-url={file.url}
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <img src={fileTypes[file.type as keyof typeof fileTypes]} className="img-fluid" />
            </a>
          </div>
          <h6>{file.name}</h6>
        </div>
      </div>
    </div>
  );
}

export default FileCard;
