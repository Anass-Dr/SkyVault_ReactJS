export default function NotFound() {
  return (
    <div className="iq-error container-fluid">
      <div className="row no-gutters">
        <div className="col-sm-12 text-center">
          <div className="iq-error-img">
            <img src="/assets/images/error/404.png" className="img-fluid" alt="404" />
          </div>
          <h2 className="mb-0 mt-4">Oops! This Page is Not Found.</h2>
          <p>The requested page does not exist.</p>
          <a className="btn btn-primary mt-3" href="/"><i className="ri-home-4-line"></i>Back to Home</a>
        </div>
      </div>
    </div>
  );
}