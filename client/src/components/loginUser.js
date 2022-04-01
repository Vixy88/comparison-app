import { useState } from "react";
import axios from "axios";

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
      <input type="text" placeholder="Email" name="eMail" onChange={onChange} />
      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={onChange}
      />
      <button type="submit">Login</button>
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
