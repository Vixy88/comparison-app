import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function LoginUser() {
  const [formData, setFormData] = useState({});
  const [userLoggedIn, setUserLoggedIn] = useState();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log({ ...formData, [e.target.name]: e.target.value });
  };

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/login", formData);
      console.log(res);
      if (res.status === 200) {
        setUserLoggedIn(true);
      }
    } catch (e) {
      console.log(e);
      setUserLoggedIn(false);
    }
  };

  const renderLoginForm = (
    <form onSubmit={onLogin}>
      <div className="mb-3">
        <label for="email" className="form-label">
          Email address
        </label>
        <input
          type="text"
          placeholder="Email"
          id="email"
          name="eMail"
          className="form-control"
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <label for="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          className="form-control"
          onChange={onChange}
        />
      </div>
      <div>
        <button type="submit" className="btn btn-warning">
          Login
        </button>
        <div>
          <Link to="/register">Create User</Link>
        </div>
      </div>
    </form>
  );

  return (
    <div className="App">
      <h2>Login</h2>
      {userLoggedIn === false && <div className="failure">Login Failed!</div>}
      {userLoggedIn ? (
        <div>
          <div>Your are Logged in 👏🏼</div> <button>Log Out</button>
        </div>
      ) : (
        renderLoginForm
      )}
    </div>
  );
}

export default LoginUser;
