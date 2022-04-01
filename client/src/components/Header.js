import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <nav class="nav nav-pills flex-column flex-sm-row">
          <Link to="/" className="text-decoration-none">
            <a
              class="flex-sm-fill text-sm-center nav-link active"
              aria-current="page"
              href="#"
            >
              Home
            </a>
          </Link>
          <Link to="/repair" className="text-decoration-none">
            <a
              class="flex-sm-fill text-sm-center nav-link"
              aria-current="page"
              href="#"
            >
              New Repair
            </a>
          </Link>
          <Link to="/companies" className="text-decoration-none">
            <a
              class="flex-sm-fill text-sm-center nav-link"
              aria-current="page"
              href="#"
            >
              All Companies
            </a>
          </Link>
          <Link to="/createcompany" className="text-decoration-none">
            <a
              class="flex-sm-fill text-sm-center nav-link"
              aria-current="page"
              href="#"
            >
              Register new company
            </a>
          </Link>
          <Link to="/register" className="text-decoration-none">
            <a class="flex-sm-fill text-sm-center nav-link" href="#">
              Register new user
            </a>
          </Link>
          <Link to="/login" className="text-decoration-none">
            <a class="flex-sm-fill text-sm-center nav-link" href="#">
              Login
            </a>
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
