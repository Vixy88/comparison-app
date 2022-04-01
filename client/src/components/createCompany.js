import { useState } from "react";
import axios from "axios";

function RegisterCompany() {
  const [formData, setFormData] = useState({});
  const [companyCreated, setCompanyCreated] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/companies", formData);
      console.log(res);
      if (res.status === 201) {
        setCompanyCreated(true);
      }
    } catch (e) {
      console.log(e);
      // setErrorMessage(e.response.data.message);
      setCompanyCreated(false);
    }
  };

  const renderRegForm = (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Company Name"
        name="companyName"
        onChange={onChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="eMail"
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Website URL"
        name="website"
        onChange={onChange}
      />
      <input
        type="number"
        placeholder="Number"
        name="number"
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Postcode"
        name="postcode"
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Address"
        name="address"
        onChange={onChange}
      />
      <input type="text" placeholder="City" name="city" onChange={onChange} />
      <input
        type="text"
        placeholder="Address"
        name="address"
        onChange={onChange}
      />
      <input
        type="password"
        placeholder="Choose Password"
        name="password"
        onChange={onChange}
      />
      <button type="submit">Create Company</button>
    </form>
  );

  return (
    <div className="App">
      <h1>Register</h1>
      {companyCreated ? (
        <div>Your company has been created! 🎯 </div>
      ) : (
        renderRegForm
      )}
      {companyCreated === false && (
        <div className="failure">The company couldn't be created.</div>
      )}
    </div>
  );
}

export default RegisterCompany;
