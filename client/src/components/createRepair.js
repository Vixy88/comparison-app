import { useState, useRef } from "react";
import axios from "axios";
import UploadButton from "./UploadButton";
import CompanyList from "./companyList";

function CreateRepair() {
  const [formData, setFormData] = useState({});
  const [repairCreated, setRepairCreated] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // const inputRef = useRef < HTMLInputElement > null;

  // const handleUpload = () => {
  //   inputRef.current?.click();
  // };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/repair", formData);
      console.log(res);
      if (res.status === 201) {
        setRepairCreated(true);
      }
    } catch (e) {
      console.log(e);
      // setErrorMessage(e.response.data.message);
      setRepairCreated(false);
    }
  };

  const renderRegForm = (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label for="itemName" className="form-label">
          Item to repair
        </label>
        <input
          type="text"
          placeholder="Item Name"
          name="itemName"
          className="form-control"
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <label for="type" className="form-label">
          Item type
        </label>
        <select
          class="form-select"
          aria-label="Default select example"
          onChange={onChange}
        >
          <option selected>Tell us what item it is</option>
          <option value="mobile">Mobile</option>
          <option value="computer">Computer</option>
          <option value="watch">Watch</option>
          <option value="jewellery">Jewellery</option>
        </select>
      </div>

      <div className="mb-3">
        <label for="description" className="form-label">
          Describe the issue
        </label>
        <textarea
          type="text"
          placeholder="Description"
          name="description"
          className="form-control"
          onChange={onChange}
        />
      </div>

      {/* <div className="m-3">
        <label className="mx-3">Upload Front Image: </label>
        <input className="d-none" type="file" name="frontImg" />
        <button className="btn btn-outline-primary">Select</button>
      </div>
      <div className="m-3">
        <label className="mx-3">Upload Back Image: </label>
        <input className="d-none" type="file" name="backImg" />
        <button className="btn btn-outline-primary">Select</button>
      </div> */}

      <div className="mb-3">
        <label for="postcode" className="form-label">
          Enter your postcode
        </label>
        <input
          type="text"
          placeholder="Postcode"
          name="postcode"
          className="form-control"
          onChange={onChange}
        />
      </div>
      <div>
        <label for="eMail" className="form-label">
          Enter your Email
        </label>
        <input
          type="email"
          placeholder="Email"
          name="eMail"
          className="form-control"
          onChange={onChange}
        />
      </div>
      <div className="mt-3">
        <button type="submit" className="btn btn-warning">
          Create Repair
        </button>
      </div>
    </form>
  );

  return (
    <div className="App">
      {repairCreated ? (
        <div>
          <h2>Your repair has been matched! 🎯 </h2>
          <p>Checkout some of your nearby repair shops ↓</p>
          <CompanyList />
        </div>
      ) : (
        renderRegForm
      )}
      {repairCreated === false && (
        <div className="failure">The repair couldn't be created.</div>
      )}
    </div>
  );
}

export default CreateRepair;
