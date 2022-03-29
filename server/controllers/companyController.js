import Company from "../models/company.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import company from "../models/company.js";

// ! CREATE A NEW COMPANY
async function createCompany(req, res, next) {
  const newCompany = req.body; // This gives us an object (the company we want to make)
  try {
    const companyFound = await Company.findOne({
      name: newCompany.companyName,
    });
    if (companyFound) {
      return res.status(400).json({
        message: `A company with the name ${newCompany.companyName}, already exists. Please choose another company name.`,
      });
    }

    // ! Creates a new company on the database
    const createdCompany = await Company.createCompany(newCompany);
    console.log(createdCompany);
    res.status(201).json(createdCompany);
  } catch (e) {
    next(e);
  }
}

// ! DELETE A COMPANY
async function deleteCompany(req, res, next) {
  const companyId = req.params.id;
  try {
    const deletedCompany = await Company.findOneAndDelete({ _id: id });
    console.log(deletedCompany);
    if (!deletedCompany) {
      return res.status(400).json({
        message: `We were not able to find a company with the id of ${companyId}, please check your details and try again`,
      });
    }
  } catch (e) {
    next(e);
  }
}

export default {
  createCompany,
  deleteCompany,
};
