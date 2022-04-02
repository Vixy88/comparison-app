import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config";

function CompanyList() {
  const [companyData, setCompanyData] = useState([]);

  useEffect(() => {
    console.log("Running useEffect");
    const getData = async () => {
      const res = await axios.get(`${API_URL}/companies`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setCompanyData(res.data);
    };
    getData();
  }, []);

  console.log({ companyData });

  return (
    <div>
      <h2>List of all companies</h2>
      <div className="d-flex justify-content-between flex-wrap">
        {companyData.map((company, idx) => (
          <div className="card mb-5" style={{ width: "25rem" }} key={idx}>
            <img
              src={company.companyImg}
              className="card-img-top"
              alt={company.companyName}
            />
            <div className="card-body">
              <h4 className="card-title">{company.companyName}</h4>
              <p className="card-text">{company.description}</p>
              <a href={company.website} target="_blank" rel="noreferrer">
                {company.website}
              </a>
              <p className="card-text">{company.postcode}</p>
            </div>
            <a href={`mailto: ${company.email}`} className="btn btn-warning">
              Contact
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompanyList;
