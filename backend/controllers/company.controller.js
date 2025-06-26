import { Company } from "../models/company.model.js";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";

//  Register Company
export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;

    if (!companyName || companyName.trim() === "") {
      return res.status(400).json({
        message: "Company name is required.",
        success: false,
      });
    }

    const existingCompany = await Company.findOne({ name: companyName });

    if (existingCompany) {
      return res.status(400).json({
        message: "You can't register the same company twice.",
        success: false,
      });
    }

    const company = await Company.create({
      name: companyName,
      userId: req.id,
    });

    return res.status(201).json({
      message: "Company registered successfully.",
      company,
      success: true,
    });
  } catch (error) {
    console.error("Register Company Error:", error);
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

// Get All Companies for Authenticated User
export const getCompany = async (req, res) => {
  try {
    const companies = await Company.find({ userId: req.id });

    return res.status(200).json({
      companies,
      success: true,
    });
  } catch (error) {
    console.error("Get Company Error:", error);
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

// ✅ Get Company by ID
export const getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);

    if (!company) {
      return res.status(404).json({
        message: "Company not found.",
        success: false,
      });
    }

    return res.status(200).json({
      company,
      success: true,
    });
  } catch (error) {
    console.error("Get Company By ID Error:", error);
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

// ✅ Update Company (with optional logo upload)
export const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;
    const updateData = { name, description, website, location };

    // Handle logo upload if file is provided
    if (req.file) {
      const fileUri = getDataUri(req.file);
      const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
      updateData.logo = cloudResponse.secure_url;
    }

    const company = await Company.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    if (!company) {
      return res.status(404).json({
        message: "Company not found.",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Company information updated.",
      company,
      success: true,
    });
  } catch (error) {
    console.error("Update Company Error:", error);
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
