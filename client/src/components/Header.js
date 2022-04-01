import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <nav className="nav nav-pills flex-sm-row justify-content-between">
          <h3>Electronic Repair</h3>
          <Link to="/" className="text-decoration-none">
            <a
              className="flex-sm-fill text-sm-center nav-link link-dark"
              aria-current="page"
              href="#"
            >
              Home
            </a>
          </Link>
          <Link to="/repair" className="text-decoration-none">
            <a
              className="flex-sm-fill text-sm-center nav-link link-dark"
              aria-current="page"
              href="#"
            >
              New Repair
            </a>
          </Link>
          <Link to="/companies" className="text-decoration-none">
            <a
              className="flex-sm-fill text-sm-center nav-link link-dark"
              aria-current="page"
              href="#"
            >
              All Companies
            </a>
          </Link>
          {/* <Link to="/createcompany" className="text-decoration-none">
            <a
              className="flex-sm-fill text-sm-center nav-link link-dark"
              aria-current="page"
              href="#"
            >
              Register new company
            </a>
          </Link> */}
          {/* <Link to="/register" className="text-decoration-none">
            <a
              className="flex-sm-fill text-sm-center nav-link link-dark"
              href="#"
            >
              Register new user
            </a>
          </Link> */}
          <Link to="/login" className="text-decoration-none">
            <a
              className="flex-sm-fill text-sm-center nav-link link-dark"
              href="#"
            >
              Login
            </a>
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
