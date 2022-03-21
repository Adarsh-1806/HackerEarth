import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-.">
        <div className="container-fluid">
          <a className="navbar-brand">
            <i className="fa fa-code" aria-hidden="true"></i>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav ">
              <button
                className="nav-link btn btn-light mx-1"
                onClick={() => {
                  navigate("/blogs");
                }}
              >
                All Blog
              </button>
              <button
                className="nav-link btn btn-light mx-1"
                onClick={() => {
                  navigate("/addblog");
                }}
              >
                Add Blog
              </button>
              <button
                className="nav-link btn btn-light mx-1"
                onClick={() => {
                  navigate("/signin");
                }}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
