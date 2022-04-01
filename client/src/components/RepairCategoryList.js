import { Link } from "react-router-dom";

const RepairCategoryList = () => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://images.unsplash.com/photo-1544228865-7d73678c0f28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="iphone"
            className="card-img-top"
          />
          <div className="card-body">
            <h2 className="card-title">Iphone Repair</h2>
            <p className="card-text">
              Screen repair, battery replacement and all other Iphone repair
              services.
            </p>
            <Link to="/repair">
              <a href="#" className="btn btn-warning">
                Start Repair
              </a>
            </Link>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="iphone"
            className="card-img-top"
          />
          <div className="card-body">
            <h2 className="card-title">Samsung Repair</h2>
            <p className="card-text">
              Screen repair, battery replacement and all other Iphone repair
              services.
            </p>
            <Link to="/repair">
              <a href="#" className="btn btn-warning">
                Start Repair
              </a>
            </Link>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://images.unsplash.com/photo-1544281679-05f73f3cb201?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="iphone"
            className="card-img-top"
          />
          <div className="card-body">
            <h2 className="card-title">Computer Repair</h2>
            <p className="card-text">
              Find the best repair shops for your laptop! Screen repair,
              microphone repair, speaker repair.
            </p>
            <Link to="/repair">
              <a href="#" className="btn btn-warning">
                Start Repair
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RepairCategoryList;
