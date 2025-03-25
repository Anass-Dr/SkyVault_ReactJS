import Profile from "../components/Profile";

function Header() {
  return (
    <div className="iq-top-navbar">
      <div className="iq-navbar-custom mt-3">
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          <div className="iq-navbar-logo d-flex align-items-center justify-content-between">
            <i className="ri-menu-line wrapper-menu"></i>
            <a href="index.html" className="header-logo">
              <img
                src="../assets/images/logo.png"
                className="img-fluid rounded-normal light-logo"
                alt="logo"
              />
              <img
                src="../assets/images/logo-white.png"
                className="img-fluid rounded-normal darkmode-logo"
                alt="logo"
              />
            </a>
          </div>
          <div className="iq-search-bar device-search">
            <form>
              <div className="input-prepend input-append">
                <div className="btn-group">
                  <label
                    className="dropdown-toggle searchbox"
                    data-toggle="dropdown"
                  >
                    <input
                      className="dropdown-toggle search-query text search-input"
                      type="text"
                      placeholder="Type here to search..."
                    />
                    <span className="search-replace"></span>
                    <a className="search-link" href="#">
                      <i className="ri-search-line"></i>
                    </a>
                    <span className="caret"></span>
                  </label>
                </div>
              </div>
            </form>
          </div>

          <div className="d-flex align-items-center">
            <div className="change-mode">
              <div className="custom-control custom-switch custom-switch-icon custom-control-inline">
                <div className="custom-switch-inner">
                  <p className="mb-0"></p>
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="dark-mode"
                    data-active="true"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="dark-mode"
                    data-mode="toggle"
                  >
                    <span className="switch-icon-left">
                      <i className="a-left"></i>
                    </span>
                    <span className="switch-icon-right">
                      <i className="a-right"></i>
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-label="Toggle navigation"
            >
              <i className="ri-menu-3-line"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto navbar-list align-items-center">
                <li className="nav-item nav-icon search-content">
                  <a
                    href="#"
                    className="search-toggle rounded"
                    id="dropdownSearch"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="ri-search-line"></i>
                  </a>
                  <div
                    className="iq-search-bar iq-sub-dropdown dropdown-menu"
                    aria-labelledby="dropdownSearch"
                  >
                    <form action="#" className="searchbox p-2">
                      <div className="form-group mb-0 position-relative">
                        <input
                          type="text"
                          className="text search-input font-size-12"
                          placeholder="type here to search..."
                        />
                        <a href="#" className="search-link">
                          <i className="las la-search"></i>
                        </a>
                      </div>
                    </form>
                  </div>
                </li>
                <li className="nav-item nav-icon dropdown caption-content">
                  <a
                    href="#"
                    className="search-toggle dropdown-toggle"
                    id="dropdownMenuButton03"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <div className="caption bg-primary line-height">P</div>
                  </a>
                  <Profile />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
